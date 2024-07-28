getImages() {
    //ajouter ajax//
    let image1 = {
      url:"avatar 200400.jpeg",
      criteria:[
        'size-200*400',
        'hair-tainted',
        'detail-tattoo',
        'detail-piercing',
        'style-nsfw'
    ],
      name:"Rolyatistaylor",
      size:[
        "200",
        "400"
      ]
    }
    let image2 = {
        url:"avatar 200320.jpeg",
        criteria:[
          'size-200*320',
          'hair-redhead',
          'style-contemp',
          'style-nsfw'
      ],
        name:"Irina Meier",
        size:[
          "200",
          "320"
        ]
    }
    let image3 = {
        url:"avatar 200400.jpeg",
        criteria:[
          'size-200*400',
          'hair-black',
          'style-contemp',
          'style-historic',
      ],
        name:"Luria XII",
        size:[
          "400",
          "250"
        ]
    }
    this.imageList.push(image1)
    this.imageList.push(image2)
    this.imageList.push(image3)
  },