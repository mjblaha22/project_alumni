import React, { useEffect, useState } from 'react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Form, FormGroup, Input } from 'reactstrap';
import Api from '../../Api/UserAPI.js'

const BusinessPage = () => {
  const [businessinfo, setBusinessInfo] = useState(0);

  const business = async () => {
    const businfo = await Api.fetchBusiness()
    console.log(businfo[0].business_name)
    if (businessinfo === 0) {
      setBusinessInfo(businfo)
    }
  }
  useEffect(() => {
    business()
  })
  
  return (
    <div>
      <p>Business {businessinfo && businessinfo[0].business_name}</p>
      <p>Address {businessinfo && businessinfo[0].street_address}</p>
    </div>
  );

}
export default BusinessPage;