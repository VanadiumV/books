
import { Card } from "@/components/ui/card"
import { BookmarkIcon } from "@radix-ui/react-icons"

function addCardToLocal(cardItem : {bookId:string, title:string , img:string , author:string}){
  const cards = localStorage.getItem("cards")
  if(!cards){
    localStorage.setItem("cards","[]")
    // @ts-ignore
    const cardsArr = []
    cardsArr.push(cardItem)
    localStorage.setItem("cards",JSON.stringify(cardsArr))
  }
  else{
    //@ts-ignore
    const cards = JSON.parse(localStorage.getItem("cards"))
    cards.push(cardItem)
    localStorage.setItem("cards",JSON.stringify(cards))
    
  }
  
}

export default function BookCard({title,author_name,cover_i,bookId} : BookType) {

  return (
    <Card className="flex items-center gap-6 p-4 sm:p-6">
      
        <img src={cover_i} alt="Book Cover" width={80} height={120} className="rounded-md object-contain" />
      <div className="flex-1 space-y-2">
        
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{author_name}</p>
          </div>
          <BookmarkIcon onClick={()=>{
            addCardToLocal({title,author:author_name,img:cover_i,bookId:bookId})
          }} className="hover:cursor-pointer scale-150"/>
    
      </div>
    </Card>
  )
}