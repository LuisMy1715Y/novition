"use cliend";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight} from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    return(
        <div className="max-w-3xl space-y-4 ">
            <h1 className="max-w-3xl text-3xl sm:text-5xl md:text-6xl font-bold pt-10 pb-5 ">
            Tus Ideas, Documentos y Planes. Unificados. Bienvenido a <span className="underline">Novition</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Novition es un espacio donde se trabaja <br /> mejor y más rápido
            </h3>
            {isLoading &&(
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg"/>
                </div>
            )}
            {isAuthenticated && !isLoading &&(
                <Button asChild>
                    <Link href="/documents">
                        Enter Novition
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading &&(
                <SignInButton mode="modal">
                    <Button>
                        Get Novition Free
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Button>
                </SignInButton>
            )}
            
        </div>
    )
}