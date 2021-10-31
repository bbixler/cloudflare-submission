export async function storefront(query, variables = {}) {
    const response = await fetch('https://cf-need-for-speed.myshopify.com/api/2021-10/graphql.json',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": 'bad304efed36cd2880598c092185d236'
            },
            body: JSON.stringify({ query, variables }),
        }

    )
    return response.json();
}