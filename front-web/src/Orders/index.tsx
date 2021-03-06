import { useEffect, useState } from 'react';
import { fetchProducts, saveOrder } from './api';
import ProductList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';
import { toast } from 'react-toastify';



function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {

      return sum  + item.price;
    
    }, 0);
    
    useEffect(() => {

        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error =>  {
                toast.warning('Erro ao enviar pedido');
            })



    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));


        if (productsIds.length <= 0) {
          toast.warning('Selecione apenas 1 producto!');
        } else {
          if (orderLocation === undefined) {
            toast.warning('Digite o seu endereço!');
          } else {
            const payload = {
              ...orderLocation!,
              products: productsIds
            }
    
            saveOrder(payload).then((response) => {
              toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}!`);
              setSelectedProducts([]);
            })
              .catch(() => {
                toast.warning('Erro ao enviar pedido!');
              })
          }
        }
      
      }

        /*
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload).then((response) => {
          toast.error( `Pedido enviado com sucesso! Nº ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })  */
      

    return (

        <>

            <div className="orders-container">
                <StepsHeader />
                <ProductList 
                products={products}
                onSelectProduct={handleSelectProduct}
                selectedProducts = {selectedProducts}
                 />
                <OrderLocation
                 onChangeLocation={location => setOrderLocation(location)} 
                 />
                <OrderSummary 
                amount={selectedProducts.length}
                 totalPrice={totalPrice} 
                 onSubmit={handleSubmit}
                 />



            </div>
            <Footer />

        </>


    );
}


export default Orders;