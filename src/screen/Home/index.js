import React, { useEffect, useState } from 'react';
import './styles.scss'
import { ProductListComponent, Container } from '../../components/styledComponent.styles'
const Home = (props) => {

    return (
        <Container>
            <ProductListComponent />
        </Container>
    );
}



export default Home;