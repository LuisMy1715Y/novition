import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return(
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1f1f1f]">
            <Logo/>
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="sm">
                    Politicas de Provacidad
                </Button>
                <Button variant="ghost" size="sm">
                    Terminos y Condiciones
                </Button>
            </div>
        </div>
    )
}
