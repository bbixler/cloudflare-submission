export default function Home({ products }) {
  return (

    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">NFT for Speed</span>{' '}
          <span className="block text-red-600 xl:inline font-extrabold">Store</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Cloudflare Pages, Worker, Shopify (Image Hosting) Integration
        </p>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only text-red-900">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-4 aspect-h-3 rounded-lg border-2 border-red-600 overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
              </a>
            ))}
          </div>
        </div>


      </div>
    </main>
  )
}



export async function getStaticProps() {

  const res = await fetch(`https://worker-functions.brenden-bixler.workers.dev`)
  const products = await res.json()

  // living dangerously with no error handling :)

  return {
    props: {
      products
    },
  }
}
