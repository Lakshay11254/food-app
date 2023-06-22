import { useState } from 'react';

import css from './MyAddresses.module.css'

import AddressCard from '../../../../Cards/AddressCard/AddressCard';
import AddAddressCard from '../../../../Cards/AddressCard/AddAddressCard';
import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

import AddAddressPortal from '../../../../Cards/MyAddressCards/AddAddressPortal/AddAddressPortal'

const MyAddresses = ({hashId}) => {

    let [isData, setIsData] = useState(true)
    let [addressModal, setAddressModal] = useState(false);

    let data = [
        {
            id: 1,
            title: "Apartment1",
            address: "Al-Barsha",
        },
        {
            id:2,
            title: "Apartment2",
            address: "Al-Barsha",
        }
    ]

  return (<div className={css.outerDiv}>
  {isData ? (
    <>
    <AddAddressCard setAddressModal={setAddressModal} />
      {data?.map(val => {
          return <AddressCard title={val?.title} address={val?.address} key={val?.id} />
      }) }
    </>
  ) : (
    <UserProfileNoData hashId={hashId} />
  )}
  {addressModal ? <AddAddressPortal setAddressModal={setAddressModal} /> : ""}
</div>);
}

export default MyAddresses  