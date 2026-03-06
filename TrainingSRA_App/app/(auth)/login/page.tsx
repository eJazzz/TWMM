"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false
        })

        if (res?.error) {
            setError("Invalid email or password")
        } else {
            router.push("/dashboard")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-lg border border-border">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary">SRA Portal</h1>
                    <p className="mt-2 text-muted-foreground">Sign in to your clinic account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-foreground">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 mt-1 bg-input text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-foreground">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 mt-1 bg-input text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    {error && <p className="text-sm text-destructive">{error}</p>}

                    <button
                        type="submit"
                        className="w-full py-2 font-semibold text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
                    >
                        Sign In
                    </button>
                </form>

                <div className="text-center text-sm">
                    <p className="text-muted-foreground">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-primary hover:underline">
                            Register Clinic
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
