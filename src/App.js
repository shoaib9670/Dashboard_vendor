import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  //states Declaration

  const [valid, setValid] = useState(true);
  const [addvalid, setAddValid] = useState(true);
  const [storeNameValid ,setSNameValid]  = useState(true);
  const classes = useStyles();
  const [brand, setBrand] = useState([
    {
      website:"",
      insts:""
    }
  ]);
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [featured, setFeatured] = useState(null);
  const [images, setImages] = useState([
    {
      url: "",
      public_id: "",
    },
  ]);
  const [locality, setLocality] = useState("");
  const [media, setMedia] = useState([
    {
      storeBanner: [
        {
          url: "",
        },
      ],
      youtube: "",
    },
  ]);
  const [onlineShop, setOnlineShop] = useState(null);
  const [openinghours, setOpeningHours] = useState([
    {
      title2key: "",
      titlekey: "",
      titlevalue: "",
      title2value: "",
    },
  ]);
  const [products, setProducts] = useState([
    {
      productName: "",
      url: "",
    },
  ]);
  const [ratings, setRatings] = useState(Number);
  const [sub_category, setSubCategory] = useState("");
  const [tags, setTags] = useState([
    {
      tags_name:"",
    }
  ]);
  const [vendor, setVendor] = useState([
    {
      vendor_name: "",
      vendor_address: "",
    },
  ]);
  const [storename, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [Package, setPackage] = useState("");
  const [season, setSeason] = useState("");
  const [Packagepriority, setPackagePriority] = useState(Number);
  const [phone, setPhone] = useState(Number);
  const [homeDelivery, setHomeDelivery] = useState(null);
  const [offer, setOffer] = useState([{ image: "", offerCounter: "" }]);
  const [allData, setAllData] = useState([
    {
      storename,
      address,
      description,
      Package,
      season,
      Packagepriority,
      phone,
      homeDelivery,
      offer,
      brand,
      category,
      city,
      featured,
      images,
      locality,
      media,
      onlineShop,
      openinghours,
      products,
      ratings,
      sub_category,
      tags,
      vendor,
    },
  ]);

  useEffect(() => {
    setAllData([
      {
        storename,
        address,
        description,
        Package,
        season,
        Packagepriority,
        phone,
        homeDelivery,
        offer,
        brand,
        category,
        city,
        featured,
        images,
        locality,
        media,
        onlineShop,
        openinghours,
        products,
        ratings,
        sub_category,
        tags,
        vendor,
      },
    ]);
  }, [
    storename,
    address,
    description,
    Package,
    season,
    Packagepriority,
    phone,
    homeDelivery,
    offer,
    brand,
    category,
    city,
    featured,
    images,
    locality,
    media,
    onlineShop,
    openinghours,
    products,
    ratings,
    sub_category,
    tags,
    vendor,
  ]);

  //input Handlers

  const handleChangeInput = (id, event) => {
    const values = [...offer];
    values[id][event.target.name] = event.target.value;
    setOffer(values);
  };

  const imageChangeInput = (id, event) => {
    const values = [...images];
    values[id][event.target.name] = event.target.value;
    setImages(values);
  };

  
  const brandChangeInput = (id, event) => {
    const values = [...brand];
    values[id][event.target.name] = event.target.value;
    setBrand(values);
  };

  const tagsChangeInput = (id, event) => {
    const values = [...tags];
    values[id][event.target.name] = event.target.value;
    setTags(values);
  }

  const productsChangeInput = (id, event) => {
    const values = [...products];
    values[id][event.target.name] = event.target.value;
    setProducts(values);
  };

  const vendorChangeInput = (id, event) => {
    const values = [...vendor];
    values[id][event.target.name] = event.target.value;
    setVendor(values);
  };

  const openinghourChangeInput = (id, event) => {
    const values = [...openinghours];
    values[id][event.target.name] = event.target.value;
    setOpeningHours(values);
  };

  const mediaChangeInput = (id, event) => {
    const values = [...media[0].storeBanner];
    values[id][event.target.name] = event.target.value;
    setMedia([
      {
        storeBanner: values,
        youtube: "",
      },
    ]);
  };

  const mediaYoutubeChangeInput = (id, event) => {
    const youtubeVal = [...media];
    youtubeVal[id][event.target.name] = event.target.value;
    setMedia(youtubeVal);
  };

  //Submit Handler

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("AllData", allData);
    const data = {
      vendor: vendor,
      brand: brand,
      storename: storename,
      description: description,
      phone: phone,
      city: city,
      locality: locality,
      address: address,
      homeDelivery: homeDelivery,
      onlineShop: onlineShop,
      featured: featured,
      category: category,
      sub_category: sub_category,
      images: images,
      media: media,
      Package: Package,
      packagepriority: Packagepriority,
      openinghours: openinghours,
      offer: offer,
      tags: tags,
      products: products,
      ratings: ratings,
      season: season,
    };
    console.log('data',data);
    axios
      .post(`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/store/new`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Add field Handler

  const handleAddFields = () => {
    setOffer([
      ...offer,
      {
        image: "",
        offerCounter: "",
      },
    ]);
  };

  const imageAddFields = () => {
    setImages([...images, { url: "", public_id: "" }]);
  };


  const addProductsFields = () => {
    setProducts([...products, { productName: "", url: "" }]);
  };

  const addMediaFields = () => {
    setMedia([
      {
        storeBanner: [
          ...media[0].storeBanner,
          {
            url: "",
          },
        ],
        youtube: "",
      },
    ]);
  };

  const addOpeninghourFields = () => {
    setOpeningHours([
      ...openinghours,
      { title2key: "", titlekey: "", titlevalue: "", title2value: "" },
    ]);
  };

  //Remove fields Handler

  const handleRemoveFields = (index) => {
    const values = [...offer];
    values.splice(index, 1);
    setOffer(values);
  };

  const imageRemoveFields = (index) => {
    const values = [...images];
    values.splice(index, 1);
    setImages(values);
  };

  const removeProductsFields = (index) => {
    const values = [...images];
    values.splice(index, 1);
    setProducts(values);
  };

  const removeOpeninghourFields = (index) => {
    const values = [...openinghours];
    values.splice(index, 1);
    setOpeningHours(values);
  };

  const removeMediaFields = (id) => {
    const values = [...media[0].storeBanner];
    values.splice(id, 1);
    setMedia([
      {
        storeBanner: values,
        youtube: "",
      },
    ]);
  };

  const phoneReg = new RegExp("[789][0-9]{9}");
  const sName = new RegExp("[a-z]");
  const add = new RegExp("[]")

  return (
    <>
      <Container>
        <h1>Vendor Uploading Dashboard</h1>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            className="input"
            name="storename"
            label="Store Name"
            variant="filled"
            value={storename}
            onChange={(event) => {
              setStoreName(event.target.value);
              setSNameValid(
                sName.test(event.target.value) &&
                  String(event.target.value).length > 5
              );
            }}
            error={!storeNameValid}
            helperText={!storeNameValid && "Name must contain atleast 5 character"}
            required
          />
          <br />
          <TextField
            className="input"
            name="address"
            label="address"
            variant="filled"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
          <br />
          {brand.map((image, index) => (
            <div key={index}>
              <FormLabel id="demo-radio-buttons-group-label">brand</FormLabel>
              <TextField
                className="input"
                name="url"
                label="Image url"
                variant="filled"
                value={image.url}
                onChange={(event) => imageChangeInput(index, event)}
              />
              <br />
              <TextField
                className="input"
                name="public_id"
                label="Image Public_id"
                variant="filled"
                value={image.public_id}
                onChange={(event) => imageChangeInput(index, event)}
              />
              <IconButton
                disabled={brand.length === 1}
                onClick={() => imageRemoveFields(index)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={() => imageAddFields()}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
          <br />
          <TextField
            className="input"
            name="category"
            label="Category"
            variant="filled"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          />
          <br />
          <TextField
            className="input"
            name="city"
            label="City"
            variant="filled"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            required
          />
          <br />
          <TextField
            className="input"
            name="description"
            label="Description"
            variant="filled"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
          <br />
          <TextField
            className="input"
            name="Package"
            label="Package"
            variant="filled"
            value={Package}
            onChange={(event) => setPackage(event.target.value)}
            required
          />
          <br />
          <TextField
            className="input"
            name="season"
            label="Season"
            variant="filled"
            value={season}
            onChange={(event) => setSeason(event.target.value)}
          />
          <br />
          <TextField
            className="input"
            name="sub_category"
            label="Sub Category"
            variant="filled"
            value={sub_category}
            onChange={(event) => setSubCategory(event.target.value)}
            required
          />
          <br />
          {brand.map((brands, index) => (
            <div key={index}>
              <FormLabel id="demo-radio-buttons-group-label">Brands</FormLabel>
              <TextField
                className="input"
                name="website"
                label="brand website"
                variant="filled"
                value={brands.website}
                onChange={(event) => brandChangeInput(index, event)}
              />
              <br />
              <TextField
                className="input"
                name="insta"
                label="brand insta"
                variant="filled"
                value={brands.insta}
                onChange={(event) => brandChangeInput(index, event)}
              />
            </div>
          ))}
          <br />
          {openinghours.map((openinghour, index) => (
            <div key={index}>
              <FormLabel id="demo-radio-buttons-group-label">
                Opening Hours
              </FormLabel>
              <br />
              <TextField
                className="input"
                name="title2key"
                label="Title2key"
                variant="filled"
                value={openinghour.title2key}
                onChange={(event) => openinghourChangeInput(index, event)}
              />
              <br />
              <TextField
                className="input"
                name="titlekey"
                label="TitleKey"
                variant="filled"
                value={openinghour.titlekey}
                onChange={(event) => openinghourChangeInput(index, event)}
              />
              <br />
              <TextField
                className="input"
                name="titlevalue"
                label="Titlevalue"
                variant="filled"
                value={openinghour.titlevalue}
                onChange={(event) => openinghourChangeInput(index, event)}
              />
              <br />
              <TextField
                className="input"
                name="title2value"
                label="Title2value"
                variant="filled"
                value={openinghour.title2value}
                onChange={(event) => openinghourChangeInput(index, event)}
              />
              <br />
              <IconButton
                disabled={openinghours.length === 1}
                onClick={() => removeOpeninghourFields(index)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={() => addOpeninghourFields()}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
          <br />
          <FormLabel id="demo-radio-buttons-group-label">Media</FormLabel>
          {media.map((medias, index) => (
            <div key={index}>
              {medias.storeBanner.map((val, id) => (
                <div key={id}>
                  <TextField
                    className="input"
                    name="url"
                    label="URL"
                    variant="filled"
                    value={val.url}
                    onChange={(event) => mediaChangeInput(id, event)}
                  />
                  <IconButton
                    disabled={media[0].storeBanner.length === 1}
                    onClick={() => removeMediaFields(id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={() => addMediaFields()}>
                    <AddIcon />
                  </IconButton>
                </div>
              ))}
              <TextField
                className="input"
                name="youtube"
                label="Youtube"
                variant="filled"
                value={medias.youtube}
                onChange={(event) => mediaYoutubeChangeInput(index, event)}
              />
            </div>
          ))}
          <br />
          {products.map((productss, index) => (
            <div key={index}>
              <FormLabel id="demo-radio-buttons-group-label">
                Productss
              </FormLabel>
              <br />
              <TextField
                className="input"
                name="products_name"
                label="Products Name"
                variant="filled"
                value={productss.image}
                onChange={(event) => productsChangeInput(index, event)}
              />
              <br />
              <TextField
                className="input"
                name="url"
                label="URL"
                variant="filled"
                value={productss.offerCounter}
                onChange={(event) => productsChangeInput(index, event)}
              />
              <br />
              <IconButton
                disabled={products.length === 1}
                onClick={() => removeProductsFields(index)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={() => addProductsFields()}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
          <br />
          {offer.map((offers, index) => (
            <div key={index}>
              <FormLabel id="demo-radio-buttons-group-label">Offer</FormLabel>
              <TextField
                className="input"
                name="image"
                label="Image"
                variant="filled"
                value={offers.image}
                onChange={(event) => handleChangeInput(index, event)}
              />
              <TextField
                className="input"
                name="offerCounter"
                label="OfferCounter"
                variant="filled"
                value={offers.offerCounter}
                onChange={(event) => handleChangeInput(index, event)}
              />
              <IconButton
                disabled={offer.length === 1}
                onClick={() => handleRemoveFields(index)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={() => handleAddFields()}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
          <br />
          {vendor.map((vendors, index) => (
            <div key={index}>
              <FormLabel id="demo-radio-buttons-group-label"> Vendor</FormLabel>
              <TextField
                className="input"
                name="vendor_name"
                label="Vendor Name"
                variant="filled"
                value={vendors.vendor_name}
                onChange={(event) => vendorChangeInput(index, event)}
              />
              <TextField
                className="input"
                name="vendor_address"
                label="Vendor Address"
                variant="filled"
                value={vendors.vendor_address}
                onChange={(event) => vendorChangeInput(index, event)}
              />
            </div>
          ))}
          <br />
          <TextField
            className="input"
            name="ratings"
            label="Ratings"
            variant="filled"
            type="number"
            value={ratings}
            onChange={(event) => setRatings(event.target.value)}
          />
          <br />
          <TextField
            className="input"
            name="locality"
            label="Locality"
            variant="filled"
            value={locality}
            onChange={(event) => setLocality(event.target.value)}
            required
          />
          <br />
          <TextField
            className="input"
            name="Packagepriority"
            label="Package Priority"
            variant="filled"
            type="number"
            value={Packagepriority}
            onChange={(event) => setPackagePriority(event.target.value)}
            required
          />
          <br />
          {tags.map((tag, index) => (
            <div key={index}>
              <FormLabel id="demo-radio-buttons-group-label">Tags</FormLabel>
              <TextField
                className="input"
                name="tags_name"
                label="tag Name"
                variant="filled"
                value={tag.website}
                onChange={(event) => tagsChangeInput(index, event)}
              />
            </div>
          ))}
          <br />
          <TextField
            className="input"
            name="phone"
            label="Phone"
            variant="filled"
            type="number"
            pattern="[789][0-9]{9}"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
              setValid(
                phoneReg.test(event.target.value) &&
                  String(event.target.value).length === 10
              );
            }}
            error={!valid}
            helperText={!valid && "Incorrect Phone Number"}
            required
          />
          <br />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Featured</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={(event) => {
                event.target.value == "yes"
                  ? setFeatured(true)
                  : setFeatured(false);
              }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <br />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Online Delivery
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={(event) => {
                event.target.value == "yes"
                  ? setHomeDelivery(true)
                  : setHomeDelivery(false);
              }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <br />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Online Shop
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={(event) => {
                event.target.value == "yes"
                  ? setOnlineShop(true)
                  : setOnlineShop(false);
              }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <br />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </form>
      </Container>
    </>
  );
}

export default App;

// import React, { useState } from 'react';
// import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import RemoveIcon from '@material-ui/icons/Remove';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
// import { v4 as uuidv4 } from 'uuid';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//     },
//   },
//   button: {
//     margin: theme.spacing(1),
//   }
// }))

// function App() {
//   const classes = useStyles()
//   const [inputFields, setInputFields] = useState([
//     { id: uuidv4(), firstName: '', lastName: '' },
//   ]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("InputFields", inputFields);
//   };

//   const handleChangeInput = (id, event) => {
//     const newInputFields = inputFields.map(i => {
//       if(id === i.id) {
//         i[event.target.name] = event.target.value
//       }
//       return i;
//     })

//     setInputFields(newInputFields);
//   }

//   const handleAddFields = () => {
//     setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
//   }

//   const handleRemoveFields = id => {
//     const values  = [...inputFields];
//     values.splice(values.findIndex(value => value.id === id), 1);
//     setInputFields(values);
//   }

//   return (
//     <Container>
//       <h1>Add New Member</h1>
//       <form className={classes.root} onSubmit={handleSubmit}>
//         { inputFields.map(inputField => (
//           <div key={inputField.id}>
//             <TextField
//               name="firstName"
//               label="First Name"
//               variant="filled"
//               value={inputField.firstName}
//               onChange={event => handleChangeInput(inputField.id, event)}
//             />
//             <TextField
//               name="lastName"
//               label="Last Name"
//               variant="filled"
//               value={inputField.lastName}
//               onChange={event => handleChangeInput(inputField.id, event)}
//             />
//             <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
//               <RemoveIcon />
//             </IconButton>

//           </div>
//         )) }
//         <div>
//         <IconButton
//               onClick={handleAddFields}
//         >
//               <AddIcon />
//         </IconButton>
//         </div>
//         <Button
//           className={classes.button}
//           variant="contained"
//           color="primary"
//           type="submit"
//           endIcon={<Icon>send</Icon>}
//           onClick={handleSubmit}
//         >Send</Button>
//       </form>
//     </Container>
//   );
// }

// export default App;
