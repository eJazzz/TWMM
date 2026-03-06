import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"
import { Prisma } from "@prisma/client"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {
            email, password, clinicName,
            state, privacyOfficer, securityOfficer, providerCount
        } = body

        if (!email || !password || !clinicName) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        const hashedPassword = await hash(password, 10)

        // Transaction to create Clinic and User
        // Explicit type for tx to fix implicit any
        const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
            const clinic = await tx.clinic.create({
                data: {
                    name: clinicName,
                    state: state || null,
                    privacyOfficer: privacyOfficer || null,
                    securityOfficer: securityOfficer || null,
                    providerCount: Number(providerCount) || 1
                }
            })

            const user = await tx.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    role: "ADMIN",
                    clinicId: clinic.id
                }
            })

            return { clinic, user }
        })

        return NextResponse.json({
            user: { email: result.user.email, clinicId: result.clinic.id },
            message: "Registration successful"
        })

    } catch (error) {
        console.error("Registration Error:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}
