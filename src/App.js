import { 
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon, 
  IonTitle, 
  IonToast, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonLabel,
  IonListHeader,
  IonList,
  IonItem,
  IonFooter,
  IonCardSubtitle
} from '@ionic/react';
import React, {useState} from 'react';

import { 
  play as playIcon, 
  menu as menuIcon, 
  personCircle as personIcon, 
  brush as artsIcon, 
  fastFood as foodIcon, 
  glasses as accesoriesIcon, 
  shirt as apparelIcon, 
  home as homeIcon, 
  rocket as toyIcon
} from 'ionicons/icons';

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000)
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonIcon icon={menuIcon} slot="start" className ="ion-margin" size="large"/>
          <IonTitle className="ion-text-center"><img className ="ion-margin" src="https://localshops.com/packs/media/images/logo-42cd78b2.png" width="70px" alt="logo"/></IonTitle>
          <IonIcon icon={personIcon} slot="end" className ="ion-margin" size="large"/>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <img src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Fruits"/>
          <IonCardHeader>
            <IonCardTitle>Shop, Discover, and Buy Everything Locally</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonListHeader>Popular Gift Ideas</IonListHeader>
        <p className="ion-padding-start">
          <IonChip color="warning">
            <IonLabel>
              Jewellery
            </IonLabel>
          </IonChip>
          <IonChip color="success">
            <IonLabel>
              Decor
            </IonLabel>
          </IonChip>
          <IonChip color="danger">
            <IonLabel>
              Girl's
            </IonLabel>
          </IonChip>
          <IonChip color="tertiary">
            <IonLabel>
              Art
            </IonLabel>
          </IonChip>
        </p>
        <IonList>
          <IonListHeader>Search by category</IonListHeader>
          <IonItem>
            <IonLabel>
            <IonIcon icon={artsIcon} slot="start" className="ion-padding-horizontal"/>
              Arts and Crafts
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
            <IonIcon icon={accesoriesIcon} slot="start" className="ion-padding-horizontal"/>
              Accesories
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
            <IonIcon icon={apparelIcon} slot="start" className="ion-padding-horizontal"/>
              Apparel
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
            <IonIcon icon={homeIcon} slot="start" className="ion-padding-horizontal"/>
              Home and Garden
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
            <IonIcon icon={toyIcon} slot="start" className="ion-padding-horizontal"/>
              Toys and Hobbies
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
            <IonIcon icon={foodIcon} slot="start" className="ion-padding-horizontal"/>
              Food and Drink
            </IonLabel>
          </IonItem>
        </IonList>
        <IonCard color="danger">
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">
              Are you a seller?
            </IonCardTitle>
          </IonCardHeader>
          <IonCardSubtitle className="ion-text-center">
          LocalShops attracts thousands of local shoppers every day!
          </IonCardSubtitle>
          <p className="ion-padding">
            <IonButton onClick={handleClick} expand="block" color="light" >
              List your shop for free
            </IonButton>
          </p>
        </IonCard>
        <IonToast isOpen={showToast} message="Registration Page Opens"/>
        <IonList>
          <IonListHeader>
            Featured In
          </IonListHeader>
          <IonItem>
            <img src="https://localshops.com/packs/media/media_logos/Avenue-Magazine-Calgary-WEB-logo-01-4-a80ced59.png" height="60px"/>
          </IonItem>
          <IonItem>
            <img src="https://localshops.com/packs/media/media_logos/RetailInsiderLogo-6bba4850.png" height="50px"/>
          </IonItem>
          <IonItem>
            <img src="https://localshops.com/packs/media/media_logos/curiocity-1218fb16.svg" height="30px"/>
          </IonItem>
          <IonItem>
            <img src="https://localshops.com/packs/media/media_logos/CTV_News-c0c25a85.png" height="40px"/>
          </IonItem>
          <IonItem>
            <img src="https://localshops.com/packs/media/media_logos/financialpost-bef09a5e.png" height="20px"/>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar color="primary">
          <IonTitle>Quick access Menu items go here</IonTitle>
        </IonToolbar>
      </IonFooter>

    </IonApp>
  );
}

export default App;
