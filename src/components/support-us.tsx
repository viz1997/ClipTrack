import { Button } from "@/components/ui/button"

export function SupportUs() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-center max-w-[600px]">
        If you find ClipTrack useful, consider supporting our work. Your contribution helps us maintain and improve the app.
      </p>
      <div className="flex space-x-4">
        <Button
         
     
        >
          Buy Me a Coffee
        </Button>
        <Button
       
 
     
        >
          爱发电
        </Button>
      </div>
    </div>
  )
}

