# Installation
- Clone the repo
- npm install
- npm start

*I'm using an online database so you don't have to set it up*
# Usage

## Filters
### product_type (string)
- COFFEE_POD_LARGE
- COFFEE_POD_SMALL
- ESPRESSO_POD
- COFFEE_MACHINE_LARGE
- COFFEE_MACHINE_SMALL
- ESPRESSO_MACHINE


### coffee_flavor (string)
- COFFEE_FLAVOR_VANILLA
- COFFEE_FLAVOR_CARAMEL
- COFFEE_FLAVOR_PSL
- COFFEE_FLAVOR_MOCHA
- COFFEE_FLAVOR_HAZELNUT

### pack_size (number)
- 1
- 3
- 5
- 7
*Note that pack size value is in dozen*

### water_line_compatible
- true
- false

### endpoint
`localhost:4000/api/product`

filters are passed as a query like the following:

`GET localhost:4000/api/product?product_type=COFFEE_POD_LARGE&pack_size=3&coffe_flavor=COFFEE_FLAVOR_HAZELNUT`

### response
```
{
    "success": true,
    "data": [
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc203b",
            "product_type": "COFFEE_POD_LARGE",
            "coffe_flavor": "COFFEE_FLAVOR_HAZELNUT",
            "sku": "CP143",
            "__v": 0
        }
    ],
    "message": ""
}
```

Specifying no filters at all and calling the endpoint directly will return all the database objects

`GET localhost:4000/api/product`

```
{
    "success": true,
    "data": [
        {
            "pack_size": 0,
            "water_line_compatible": true,
            "model": "premium",
            "_id": "5f1d44034313e52074dc2023",
            "product_type": "COFFEE_MACHINE_LARGE",
            "coffe_flavor": "",
            "sku": "CM102",
            "__v": 0
        },
        {
            "pack_size": 0,
            "water_line_compatible": true,
            "model": "deluxe",
            "_id": "5f1d44034313e52074dc2024",
            "product_type": "COFFEE_MACHINE_LARGE",
            "coffe_flavor": "",
            "sku": "CM103",
            "__v": 0
        },
        {
            "pack_size": 0,
            "water_line_compatible": false,
            "model": "base",
            "_id": "5f1d44034313e52074dc2025",
            "product_type": "ESPRESSO_MACHINE",
            "coffe_flavor": "",
            "sku": "EM001",
            "__v": 0
        },
        {
            "pack_size": 0,
            "water_line_compatible": false,
            "model": "premium",
            "_id": "5f1d44034313e52074dc2026",
            "product_type": "ESPRESSO_MACHINE",
            "coffe_flavor": "",
            "sku": "EM002",
            "__v": 0
        },
        {
            "pack_size": 0,
            "water_line_compatible": true,
            "model": "deluxe",
            "_id": "5f1d44034313e52074dc2027",
            "product_type": "ESPRESSO_MACHINE",
            "coffe_flavor": "",
            "sku": "EM003",
            "__v": 0
        },
        {
            "pack_size": 1,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2028",
            "product_type": "COFFEE_POD_SMALL",
            "coffe_flavor": "COFFEE_FLAVOR_VANILLA",
            "sku": "CP001",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2029",
            "product_type": "COFFEE_POD_SMALL",
            "coffe_flavor": "COFFEE_FLAVOR_VANILLA",
            "sku": "CP003",
            "__v": 0
        },
        {
            "pack_size": 1,
            "water_line_compatible": true,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc202a",
            "product_type": "COFFEE_POD_SMALL",
            "coffe_flavor": "COFFEE_FLAVOR_CARAMEL",
            "sku": "CP011",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc202b",
            "product_type": "COFFEE_POD_SMALL",
            "coffe_flavor": "COFFEE_FLAVOR_CARAMEL",
            "sku": "CP013",
            "__v": 0
        },
        {
            "pack_size": 1,
            "water_line_compatible": true,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc202c",
            "product_type": "COFFEE_POD_SMALL",
            "coffe_flavor": "COFFEE_FLAVOR_PSL",
            "sku": "CP021",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": true,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc202d",
            "product_type": "COFFEE_POD_SMALL",
            "coffe_flavor": "COFFEE_FLAVOR_PSL",
            "sku": "CP023",
            "__v": 0
        },
        {
            "pack_size": 1,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc202e",
            "product_type": "COFFEE_POD_SMALL",
            "coffe_flavor": "COFFEE_FLAVOR_MOCHA",
            "sku": "CP031",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc202f",
            "product_type": "COFFEE_POD_SMALL",
            "coffe_flavor": "COFFEE_FLAVOR_MOCHA",
            "sku": "CP033",
            "__v": 0
        },
        {
            "pack_size": 1,
            "water_line_compatible": true,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2030",
            "product_type": "COFFEE_POD_SMALL",
            "coffe_flavor": "COFFEE_FLAVOR_HAZELNUT",
            "sku": "CP041",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2031",
            "product_type": "COFFEE_POD_SMALL",
            "coffe_flavor": "COFFEE_FLAVOR_HAZELNUT",
            "sku": "CP043",
            "__v": 0
        },
        {
            "pack_size": 1,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2032",
            "product_type": "COFFEE_POD_LARGE",
            "coffe_flavor": "COFFEE_FLAVOR_VANILLA",
            "sku": "CP101",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2033",
            "product_type": "COFFEE_POD_LARGE",
            "coffe_flavor": "COFFEE_FLAVOR_VANILLA",
            "sku": "CP103",
            "__v": 0
        },
        {
            "pack_size": 1,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2034",
            "product_type": "COFFEE_POD_LARGE",
            "coffe_flavor": "COFFEE_FLAVOR_CARAMEL",
            "sku": "CP111",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2035",
            "product_type": "COFFEE_POD_LARGE",
            "coffe_flavor": "COFFEE_FLAVOR_CARAMEL",
            "sku": "CP113",
            "__v": 0
        },
        {
            "pack_size": 1,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2036",
            "product_type": "COFFEE_POD_LARGE",
            "coffe_flavor": "COFFEE_FLAVOR_PSL",
            "sku": "CP121",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2037",
            "product_type": "COFFEE_POD_LARGE",
            "coffe_flavor": "COFFEE_FLAVOR_PSL",
            "sku": "CP123",
            "__v": 0
        },
        {
            "pack_size": 1,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2038",
            "product_type": "COFFEE_POD_LARGE",
            "coffe_flavor": "COFFEE_FLAVOR_MOCHA",
            "sku": "CP131",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2039",
            "product_type": "COFFEE_POD_LARGE",
            "coffe_flavor": "COFFEE_FLAVOR_MOCHA",
            "sku": "CP133",
            "__v": 0
        },
        {
            "pack_size": 1,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc203a",
            "product_type": "COFFEE_POD_LARGE",
            "coffe_flavor": "COFFEE_FLAVOR_HAZELNUT",
            "sku": "CP141",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc203b",
            "product_type": "COFFEE_POD_LARGE",
            "coffe_flavor": "COFFEE_FLAVOR_HAZELNUT",
            "sku": "CP143",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc203c",
            "product_type": "ESPRESSO_POD",
            "coffe_flavor": "COFFEE_FLAVOR_VANILLA",
            "sku": "EP003",
            "__v": 0
        },
        {
            "pack_size": 5,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc203d",
            "product_type": "ESPRESSO_POD",
            "coffe_flavor": "COFFEE_FLAVOR_VANILLA",
            "sku": "EP005",
            "__v": 0
        },
        {
            "pack_size": 7,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc203e",
            "product_type": "ESPRESSO_POD",
            "coffe_flavor": "COFFEE_FLAVOR_VANILLA",
            "sku": "EP007",
            "__v": 0
        },
        {
            "pack_size": 3,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc203f",
            "product_type": "ESPRESSO_POD",
            "coffe_flavor": "COFFEE_FLAVOR_CARAMEL",
            "sku": "EP013",
            "__v": 0
        },
        {
            "pack_size": 5,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2040",
            "product_type": "ESPRESSO_POD",
            "coffe_flavor": "COFFEE_FLAVOR_CARAMEL",
            "sku": "EP015",
            "__v": 0
        },
        {
            "pack_size": 7,
            "water_line_compatible": false,
            "model": "Unspecified",
            "_id": "5f1d44034313e52074dc2041",
            "product_type": "ESPRESSO_POD",
            "coffe_flavor": "COFFEE_FLAVOR_CARAMEL",
            "sku": "EP017",
            "__v": 0
        },
        {
            "pack_size": 0,
            "water_line_compatible": false,
            "model": "base",
            "_id": "5f1d44034313e52074dc201f",
            "product_type": "COFFEE_MACHINE_SMALL",
            "coffe_flavor": "",
            "sku": "CM001",
            "__v": 0
        },
        {
            "pack_size": 0,
            "water_line_compatible": false,
            "model": "premium",
            "_id": "5f1d44034313e52074dc2020",
            "product_type": "COFFEE_MACHINE_SMALL",
            "coffe_flavor": "",
            "sku": "CM002",
            "__v": 0
        },
        {
            "pack_size": 0,
            "water_line_compatible": true,
            "model": "deluxe",
            "_id": "5f1d44034313e52074dc2021",
            "product_type": "COFFEE_MACHINE_SMALL",
            "coffe_flavor": "",
            "sku": "CM003",
            "__v": 0
        },
        {
            "pack_size": 0,
            "water_line_compatible": false,
            "model": "base",
            "_id": "5f1d44034313e52074dc2022",
            "product_type": "COFFEE_MACHINE_LARGE",
            "coffe_flavor": "",
            "sku": "CM101",
            "__v": 0
        }
    ],
    "message": ""
}
```