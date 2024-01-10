import React, { useState } from 'react';
import "./App.css"

const Card = ({ title, description, imageUrl, onClick }) => (
  <div className='hama'>
  <div className="card" onClick={onClick}>
    <img className='fddd' src={imageUrl} alt={title}  width={"180px"} height={"150px"}/>
    <div className="card-body hamza">
      <h3>{title}</h3>
      <p>Description: {description}</p>    {/* Fix: Add "Description:" before the {description} */}
    </div>
    </div>
  </div>
);

const CardList = ({ data, onCardClick }) => (
  <div className="card-list">
    {data.map((item, index) => (
      <Card key={index} {...item} onClick={() => onCardClick(index)} />
    ))}
  </div>
);

const CardDetail = ({ card, onGoBack }) => (
  <div className="card-detail">
    <h2>{card.title}</h2>
    <img src={card.imageUrl} alt={card.title} />
    <p>{card.description} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <button onClick={onGoBack}>Go Back</button>
  </div>
);

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Sample data array
  const data = [
    {
      title: 'Card 1',
      imageUrl: 'https://www.91-img.com/gallery_images_uploads/3/d/3df5ca6a9b470f715b085991144a5b76e70da975.JPG?tr=h-630,c-at_max,q-80',
    },
    {
      title: 'Card 2',
      imageUrl: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1702887087446/56d389f77647103ff70e0bce2c8bf5af.png ',
    },

    {
      title: 'Card 3',
      imageUrl: 'https://propakistani.pk/price/wp-content/uploads/2022/02/vivo-Y20s-G-price-200x300.png ',
    },

    {
      title: 'Card 4',
      imageUrl: 'https://www.whatmobile.com.pk/control/news/assets/11102021/05684caaec7283bd99678148418c7ec7.jpg ',
    },

    {
      title: 'Card 5',
      imageUrl: 'https://www.whatmobile.com.pk/control/news/assets/28062023/15b0f8b30f60a7826af71a3bc59af6cd.jpg ',
    },

    {
      title: 'Card 6',
      imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/pk/feature/164639001/pk-feature-minimal-look--quality-design-537050997?$FB_TYPE_A_MO_JPG$ ',
    },

    {
      title: 'Card 7',
      imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/pk/sm-a546elgdpkd/gallery/pk-galaxy-a54-5g-sm-a546-sm-a546elgdpkd-538125045?$650_519_PNG$',
    },

    {
      title: 'Card 8',
      imageUrl: 'https://images.samsung.com/pk/smartphones/galaxy-s22-ultra/buy/S22_Ultra_Carousel_GroupKV_PC.jpg',
    },


    // Add more data items as needed
  ];

  const handleCardClick = (index) => {
    setSelectedCard(data[index]);
  };

  const handleGoBack = () => {
    setSelectedCard(null);
  };

  return (
    <div className="app">
      <div className='hunn'>
      <h1>React Card List</h1>
      {selectedCard ? (
        <CardDetail card={selectedCard} onGoBack={handleGoBack} />
      ) : (
        <CardList data={data} onCardClick={handleCardClick} />
      )}
      </div>
    </div>
  );
};

export default App;
