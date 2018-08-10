export interface Product {
	post_title: string,
    post_name: string,
    ID: number,
    post_excerpt: string,
    post_content: string,
    sku: string,
    regular_price: number,
    sale_price: string,
    product_url: string,
    images: string,
    'tax:product_type': string,
    'tax:product_visibility': string,
    'tax:product_cat': string,
    'tax:product_tag': string,
    'tax:product_shipping_class': string
}
