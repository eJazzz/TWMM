"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function RegisterPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        clinicName: "",
        state: "FL", // Default to FL as per requirement (Florida specific logic)
        privacyOfficer: "",
        securityOfficer: "",
        providerCount: 1
    })
    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            if (!res.ok) {
                const data = await res.json()
                throw new Error(data.error || "Registration failed")
            }

            router.push("/login?registered=true")
        } catch (err: any) {
            setError(err.message)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background py-10">
            <div className="w-full max-w-2xl p-8 space-y-6 bg-card rounded-lg shadow-lg border border-border">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary">Clinic Registration</h1>
                    <p className="mt-2 text-muted-foreground">Create your SRA Portal account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Account Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground">Email</label>
                            <input
                                name="email"
                                type="email"
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 bg-input text-foreground border border-border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground">Password</label>
                            <input
                                name="password"
                                type="password"
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 bg-input text-foreground border border-border rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <hr className="border-border" />

                    {/* Clinic Info */}
                    <div>
                        <label className="block text-sm font-medium text-foreground">Clinic Name</label>
                        <input
                            name="clinicName"
                            type="text"
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 bg-input text-foreground border border-border rounded-md"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground">State</label>
                            <select
                                name="state"
                                onChange={handleChange}
                                value={formData.state}
                                className="w-full px-3 py-2 mt-1 bg-input text-foreground border border-border rounded-md"
                            >
                                <option value="FL">Florida</option>
                                <option value="NY">New York</option>
                                <option value="CA">California</option>
                                <option value="TX">Texas</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground">Number of Providers</label>
                            <input
                                name="providerCount"
                                type="number"
                                min="1"
                                onChange={handleChange}
                                value={formData.providerCount}
                                className="w-full px-3 py-2 mt-1 bg-input text-foreground border border-border rounded-md"
                            />
                        </div>
                    </div>

                    {/* Officers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground">Privacy Officer Name</label>
                            <input
                                name="privacyOfficer"
                                type="text"
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 bg-input text-foreground border border-border rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground">Security Officer Name</label>
                            <input
                                name="securityOfficer"
                                type="text"
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 bg-input text-foreground border border-border rounded-md"
                            />
                        </div>
                    </div>

                    {error && <p className="text-sm text-destructive">{error}</p>}

                    <button
                        type="submit"
                        className="w-full py-3 font-semibold text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
                    >
                        Create Account
                    </button>
                </form>

                <div className="text-center text-sm">
                    <p className="text-muted-foreground">
                        Already registered?{" "}
                        <Link href="/login" className="text-primary hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
