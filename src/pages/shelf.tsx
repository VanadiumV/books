/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qJD8wXd1wAf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom"
import BookCard from "@/components/bookCard"
import { useEffect, useState } from "react"


export default function ShelfPage() {
  const [books,setBooks] = useState([])

  useEffect(()=>{
    let books = localStorage.getItem("cards")
    if(!books) return
    else{
      books = JSON.parse(books)
      // @ts-ignore
      setBooks(books)
    }

  },[])
  return (
    <main className="flex flex-col min-h-screen">
      <header className="bg-gray-100 dark:bg-gray-800 py-4 md:py-6 lg:py-8">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to={"/"}
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              
            >
              Home
            </Link>
            <Link
              to={"/search"}
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              
            >
            Search
            </Link>
          </div>
         
        </div>
      </header>
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 grid gap-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
          
         
          {
            books.map(book=>{
              // @ts-ignore
              return <BookCard title={book.title} author_name={book.author} bookId={book.bookId} key={book.bookId} cover_i={book.img}  />
            })
          }
          
            
            
           
            
           
            
          </div>
          
        </div>
      </section>
    </main>
  )
}

