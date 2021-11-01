addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const data = [
    {
      id: 1,
      name: 'NFT Speedboat #1',
      href: '#',
      price: '$100',
      description: '3 variants available',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0606/6982/1143/products/speedboat-1.png?v=1635713545s',
      imageAlt: 'NFT Speedboat #1',
    },
    {
      id: 2,
      name: 'NFT Speedboat #2',
      href: '#',
      price: '$250',
      description: 'Bright green',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0606/6982/1143/products/speedboat-2.png?v=1635713601',
      imageAlt: 'NFT Speedboat #2',
    },
    {
      id: 3,
      name: 'NFT Speedboat #3',
      href: '#',
      price: '$300',
      description: 'Rare',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0606/6982/1143/products/speedboat-3.png?v=1635713649',
      imageAlt: 'NFT Speedboat #3',
    },
    {
      id: 4,
      name: 'NFT Battleship #1',
      href: '#',
      price: '$120',
      description: 'Dark Brown',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0606/6982/1143/products/battleship-1.png?v=1635713689',
      imageAlt: 'NFT Battleship #1',
    },
    {
      id: 5,
      name: 'NFT Spaceship #1',
      href: '#',
      price: '$1000',
      description: 'Ultra Rare',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0606/6982/1143/products/spaceship-1.png?v=1635713735',
      imageAlt: 'NFT Spaceship #1',
    },
  ]
  const json = JSON.stringify(data, null, 2);
  return new Response(json, {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}