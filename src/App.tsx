import { Link } from "react-router-dom"


function App() {


  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl dark:text-gray-100 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Discover Your Next Great Read
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
              Organize your personal book collection and explore new titles with our intuitive bookshelf app.
            </p>
            <div className="flex gap-4">
              <Link
                to="/search"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                
              >
                Search Books
              </Link>
              <Link
                to="/shelf"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-900/30 dark:focus-visible:ring-gray-300" 
                
              >
                My Shelf
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/bookshelf.jpg"
              width={500}
              alt="Bookshelf"
              className="mx-auto aspect-square object-contain overflow-hidden rounded-xl"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
