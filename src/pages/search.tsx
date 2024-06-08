
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import BookCard from "@/components/bookCard"
import { useRef, useState } from "react"
import BookLoader from "@/components/bookLoader"



export default function SearchPage() {
  const [bookArray,setBookArray] = useState<BookType[]>([])
  const [loading,setLoading] = useState(false)
  const controllerRef = useRef<AbortController>()

  return (
    <main className="flex flex-col min-h-screen">
      <header className="bg-gray-100 dark:bg-gray-800 py-4 md:py-6 lg:py-8">
        <div className="container px-4 md:px-6 md:flex space-y-2 md:space-y-0 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to={"/"}
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              
            >
              Home
            </Link>
            <Link
              to={"/shelf"}
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              
            >
            My Shelf
            </Link>
          </div>
          
          <div className="flex items-center w-full max-w-md gap-2">
            <Input
              onChange={(e)=>{
               
                if(controllerRef.current){
                  controllerRef.current.abort()
                }
               
                controllerRef.current = new AbortController()
                setLoading(true)
                fetch(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`,{signal : controllerRef.current.signal}).then(res=>res.json())
                .then((booksResponse: {docs : BookType[]})=>{
                  setBookArray(booksResponse.docs)
                  
                  setLoading(false)
                })
                .catch(e=>console.log(e))
                
              }}
              type="search"
              placeholder="Search books..."
              className="flex-1 rounded-l-md border-r-0 focus:border-gray-400 focus:ring-gray-400 dark:bg-gray-950 dark:border-gray-800 dark:text-gray-50 dark:focus:border-gray-600 dark:focus:ring-gray-600"
            />
            <Button
              
              className="rounded-r-md border-l-0 bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
            >
              Search
            </Button>
          </div>
        </div>
      </header>
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 grid gap-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {
              loading ? <BookLoader/> : (
                <>
                {
                  bookArray.map((book)=>{
                    return (
                      <BookCard title={book.title} author_name={book.author_name} key={book.key} cover_i={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} bookId={book.key} />
                    )
                  })
                }
                </>
              )
            }

         
         
          
          </div>
          
        </div>
      </section>
    </main>
  )
}

