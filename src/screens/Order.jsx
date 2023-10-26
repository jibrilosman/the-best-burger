import { Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useStyles } from '../styles'


const Order = () => {
    const styles = useStyles()
    const [products, setProducts] = useState([])

    useEffect(() => async () => {
        const response = await fetch('http://localhost:5000/api/categories')
        const data = await response.json()
        setProducts(data)
    }, [])

  return (
    <div>
        <Box className={styles.root} >
            <Box className={[styles.main, styles.center]}>
                <Typography component='h3' variant='h3' className={`${styles.center} && ${styles.white}`}  >
               
                </Typography>
                <Box className={styles.cards}>
                    {products.map(product => (
                        <div key={product.name}>
                            <Typography component='h3' variant='h3' className={styles.center}  >
                                {product.name}
                                
                            </Typography>
                            <Typography component='h3' variant='h3' className={styles.center}  >
                                {product.price}
                                
                            </Typography>
                            
                            <img src={product.image} alt="" />
                        </div>
                    ))}
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Order