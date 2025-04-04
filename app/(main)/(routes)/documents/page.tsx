"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPages = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () =>{
        const promise = create({title: "Sin Titulo"});

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note."
        });


    }

    return(
        <div className="h-screen flex flex-col items-center justify-center space-y-4">
            <Image
                src = "/idea.svg"
                height = "300"
                width = "300"
                alt = "Idea"
                className="dark:hidden"
            />

            <Image
                src = "/ideadark.svg"
                height = "300"
                width = "300"
                alt = "Idea"
                className="hidden dark:block"
            />

            <h2 className="text-lg font-medium">
                Bienvenido a Novition {user?.firstName}
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2"/>
                Crea una nota
            </Button>
        </div>
    );
}

export default DocumentsPages;