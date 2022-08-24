import express from 'express';

const app = express();

const port = 8000

app.get('/', async (req, res) => {
    res.json({

        "title": "Flipkart Affiliate API Directory",
        "description": "This directory contains information about all the affiliate APIs and their versions",
        "apiGroups": {
            "affiliate": {
                "name": "affiliate",
                "apiListings": {
                    "bags_wallets_belts": {
                        "availableVariants": {
                            "v0.1.0": {
                                "resourceName": "bags_wallets_belts",
                                "put": null,
                                "delete": null,
                                "post": null,
                                "get": "https://affiliate-api.flipkart.net/affiliate/feeds/keshav/category/reh.json?expiresAt=1459959717790&sig=ec6c81c694581ccf1b2b5fe5bd9cf289",
                                "deltaGet": "https://affiliate-api.flipkart.net/affiliate/deltaFeeds/keshav/category/reh.json?expiresAt=1459959717790&sig=ec6c81c694581ccf1b2b5fe5bd9cf289"
                            },
                            "v1.1.0": {
                                "resourceName": "bags_wallets_belts",
                                "put": null,
                                "delete": null,
                                "post": null,
                                "get": "https://affiliate-api.flipkart.net/affiliate/1.0/feeds/keshav/category/reh.json?expiresAt=1459959717790&sig=79ae396a3350f7fc552722a657b5806d",
                                "deltaGet": "https://affiliate-api.flipkart.net/affiliate/1.0/deltaFeeds/keshav/category/reh.json?expiresAt=1459959717790&sig=79ae396a3350f7fc552722a657b5806d",
                                "top": "https://affiliate-api.flipkart.net/affiliate/1.0/topFeeds/keshav/category/reh.json?expiresAt=1469556418186&sig=973ab9097995ec0612b9f8271fa063e6"
                            }
                        },
                        "apiName": "bags_wallets_belts"
                    }
                }
            }
        }

    })
})
app.listen(port, () => {
    console.log(`Server listen to the port: ${port}`)
})