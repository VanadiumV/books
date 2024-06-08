
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function BookLoader() {

  return (
    <Card className="flex items-center gap-6 p-4 sm:p-6">
      
        <Skeleton className="h-[120px] w-[80px] rounded-md" />
      
      <div className="flex-1 space-y-2">
       
          <div>
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-5 w-[150px] mt-2" />
          </div>
        
      </div>
    </Card>
  )
}