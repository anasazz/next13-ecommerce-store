import ProductList from '@/components/product-list'
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Container from '@/components/ui/container';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  },
}

const ProductPage: React.FC<ProductPageProps> = async ({ 
  params
 }) => {
  const product = await getProduct(params.productId);
  console.log("product=====", product);
  
  const suggestedProducts = await getProducts({ 
    categoryId: product?.category?.id
  });

  if (!product) {
    return null;
  }

  const randomAvatarUrl = (username) => {
    // You can use a service like Adorable Avatars to generate random avatars
    const baseUrl = 'https://api.adorable.io/avatars/';
    const size = 80; // Adjust the size as needed
    return `https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80`;
  };

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />


          <p className="text-lg bg-white font-semibold mb-4">Description:</p>
<p className="text-gray-600">{product?.short_description}</p>  
<hr className="my-10" />
        <div className="bg-white p-4 shadow-lg rounded-lg mt-6">
  <p className="text-lg font-semibold mb-4">Reviews:</p>
  <div className="border-t border-gray-300 py-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {product.Feedback.map((review, index) => (
        <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
          
          <div className="flex items-center space-x-2">
          <div className="flex items-center ">
              <img src={randomAvatarUrl(review.id)} alt="User Avatar" className="h-8 w-8 rounded-full" />
            </div>
            <div className="text-yellow-400 flex space-x-1 items-center">
              {/* Display star icons based on review rating */}
              {Array.from({ length: review.rating }, (_, i) => (
                <svg key={i} className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 1l2.4 6.2h6.6l-5.3 4.8 2.2 6.5-6-4.4-6 4.3 2.3-6.5-5.3-4.8h6.6z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600">{review.rating} </p>
          </div>
          <p className="text-gray-600 mt-4">{review.comment}</p>
        </div>
      ))}
    </div>
  </div>
</div>

          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>  
  )
}

export default ProductPage;
