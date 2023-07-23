let productosAComprar = [
  {
    id: 1,
    nombre: 'Aceite de girasol',
    marca: 'Cañuelas',
    precio: '$ 600',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/192351-1200-auto?v=637515947620670000&width=1200&height=auto&aspect=true'
  },
  {
    id: 2,
    nombre: 'Aceite de girasol',
    marca: 'Cocinero',
    precio: '$ 750',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/193270-1200-auto?v=637515951429070000&width=1200&height=auto&aspect=true'
  },
  {
    id: 3,
    nombre: 'Fideos mostachol',
    marca: 'Maroleo',
    precio: '$  220',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/175183-1200-auto?v=637468568767830000&width=1200&height=auto&aspect=true'
  },
  {
    id: 4,
    nombre: 'Fideos mostachol',
    marca: 'Matarazzo',
    precio: '$ 235',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/318016-1200-auto?v=638180310971370000&width=1200&height=auto&aspect=true'
  },
  {
    id: 5,
    nombre: 'Fideos spaghetti',
    marca: 'Terrabusi',
    precio: '$ 220',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/178724-1200-auto?v=637468580111130000&width=1200&height=auto&aspect=true'
  },
  {
    id: 6,
    nombre: 'Fideos spaghetti',
    marca: 'Matarazzo',
    precio: '$ 240',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/318015-1200-auto?v=638180310961830000&width=1200&height=auto&aspect=true'
  },
  {
    id: 7,
    nombre: 'Fideos tirabuzon',
    marca: 'Favorito',
    precio: '$ 230',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/234899-1200-auto?v=637793428852870000&width=1200&height=auto&aspect=true'
  },
  {
    id: 8,
    nombre: 'Fideos tirabuzon',
    marca: 'Terrabussi',
    precio: '$ 220',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/175357-1200-auto?v=637468569701530000&width=1200&height=auto&aspect=true'
  },
  {
    id: 9,
    nombre: 'Harina integral',
    marca: 'Pureza',
    precio: '$ 260',
    categoria: 'Almacen',
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/224882-1200-auto?v=637855393483400000&width=1200&height=auto&aspect=true'
  },
  {
    id: 10,
    nombre: 'Harina de trigo',
    marca: 'Caserita',
    precio: '$ 190',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/274269-1200-auto?v=638115559930500000&width=1200&height=auto&aspect=true'
  },
  {
    id: 11,
    nombre: 'Harina Leudante',
    marca: 'Caserita',
    precio: '$ 225',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/274268-1200-auto?v=638115549618470000&width=1200&height=auto&aspect=true'
    
  },
  {
    id: 12,
    nombre: 'Harina de trigo',
    marca: 'Pureza',
    precio: '$ 240',
    categoria: 'Almacen',
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/212971-1200-auto?v=637853428686100000&width=1200&height=auto&aspect=true'
  },
  {
    id: 13,
    nombre: 'Lata de tomates',
    marca: 'Arcor',
    precio: '$ 175',
    categoria: 'Almacen',
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/282554-1200-auto?v=638192649763400000&width=1200&height=auto&aspect=true'
  },
  {
    id: 14,
    nombre: 'Lata de tomates',
    marca: 'Salsati',
    precio: '$ 220',
    categoria: 'Almacen',
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/280731-300-300?v=638182174193730000&width=300&height=300&aspect=true'
  },
  {
    id: 15,
    nombre: 'Lentejas ',
    marca: 'Inalpa',
    precio: '$ 500',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/241888-240-240?v=637865793507400000&width=240&height=240&aspect=true'
  },
  {
    id: 16,
    nombre: 'Lentejas ',
    marca: 'La española',
    precio: '$ 440',
    categoria: 'Almacen',
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/238291-300-300?v=637862172063170000&width=300&height=300&aspect=true'
  },
  {
    id: 17,
    nombre: 'Pure de tomates',
    marca: 'Arcor',
    precio: '$ 180',
    categoria: 'Almacen',
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/263517-1200-auto?v=638037238019300000&width=1200&height=auto&aspect=true'
  },
  {
    id: 18,
    nombre: 'Pure de tomates',
    marca: 'Salsati',
    precio: '$ 220',
    categoria: 'Almacen',
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/217443-1200-auto?v=637854084707400000&width=1200&height=auto&aspect=true'
  },
  {
    id: 19,
    nombre: 'Sal fina de mesa',
    marca: 'Celusal',
    precio: '$ 180',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/196629-240-240?v=637523688684930000&width=240&height=240&aspect=true'
  },
  {
    id: 20,
    nombre: 'Sal fina de mesa',
    marca: 'Aliada',
    precio: '$ 90',
    categoria: 'Almacen',
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/275197-300-300?v=638137353698670000&width=300&height=300&aspect=true'
  },
  {
    id: 21,
    nombre: 'Vinegre de alcohol',
    marca: 'Menoyo',
    precio: '$ 240',
    categoria: 'Almacen',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/209174-240-240?v=1774834731&width=240&height=240&aspect=true'
  },
  {
    id: 23,
    nombre: 'pilas alcalinas',
    marca: 'Duracell',
    precio: '$ 1385',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/158705-240-240?v=1774830977&width=240&height=240&aspect=true'
  },
  {
    id: 24,
    nombre: 'Broches para ropa',
    marca: 'tu',
    precio: '$ 748',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/166429-240-240?v=1774814264&width=240&height=240&aspect=true'
  },
  {
    id: 25,
    nombre: 'Bolsas hermeticas',
    marca: 'Ziploc',
    precio: '$ 1006',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/163705-240-240?v=1774801119&width=240&height=240&aspect=true'
  },
  {
    id: 26,
    nombre: 'Lamparita led',
    marca: 'AKAI ENERGY',
    precio: '$ 630',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/158726-240-240?v=1774886175&width=240&height=240&aspect=true'
  },
  {
    id: 27,
    nombre: 'Adhecivo en gel',
    marca: 'La Gotita',
    precio: '$ 800',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/187542-240-240?v=1774897010&width=240&height=240&aspect=true'
  },
  {
    id: 28,
    nombre: 'shaumerios',
    marca: 'triples empaste',
    precio: '$523',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/160474-240-240?v=1774884306&width=240&height=240&aspect=true'
  },
  {
    id: 29,
    nombre: 'Difusor organic',
    marca: 'spa coco vainilla',
    precio: '$ 1200',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/160593-240-240?v=1774875410&width=240&height=240&aspect=true'
  },
  {
    id: 30,
    nombre: 'Rollo Aluminio',
    marca: 'Separata 5mts',
    precio: '$ 550',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/163695-240-240?v=1774876775&width=240&height=240&aspect=true'
  },
  {
    id: 31,
    nombre: 'Escarbadientes',
    marca: 'Barrilil 2 x 100 u',
    precio: '$687',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/230753-240-240?v=1774888427&width=240&height=240&aspect=true'
  },
  {
    id: 32,
    nombre: 'Set vasos',
    marca: 'pampa',
    precio: '$ 2500',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/163182-240-240?v=1774903433&width=240&height=240&aspect=true'
  },
  {
    id: 33,
    nombre: 'Ensaladera',
    marca: 'primavera grande',
    precio: '$ 3200',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/163029-240-240?v=1774877422&width=240&height=240&aspect=true'
  },
  {
    id: 34,
    nombre: 'Set cuchillos',
    marca: 'carol',
    precio: '$1000',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/193319-240-240?v=1774875841&width=240&height=240&aspect=true'
  },
  {
    id: 35,
    nombre: 'Vasos hebras',
    marca: '300 cc',
    precio: '$220',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/266574-240-240?v=1774902938&width=240&height=240&aspect=true'
  },
  {
    id: 36,
    nombre: 'Salero de mesa ',
    marca: 'C/U',
    precio: '$ 300',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/163338-240-240?v=1774876813&width=240&height=240&aspect=true'
  },
  {
    id: 37,
    nombre: 'Jarra vallarta',
    marca: 'Vallarta flist 1L',
    precio: '$ 1500',
    categoria: 'Bazar',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/163003-240-240?v=1774902932&width=240&height=240&aspect=true'
  },
  {
    id: 39,
    nombre: "Refresco de cola",
    marca: "Coca-Cola",
    categoria: "Bebidas",
    precio: '$ 475',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/332148-240-240?v=1774903803&width=240&height=240&aspect=true'
  },
  {
    id: 40,
    nombre: "Jugo de manzana soja",
    marca: "Ades soja",
    categoria: "Bebidas",
    precio: '$ 220',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/275515-240-240?v=1774877908&width=240&height=240&aspect=true'
  },
  {
    id: 41,
    nombre: "Gaseosa de limón",
    marca: "Sprite",
    categoria: "Bebidas",
    precio: '$ 375',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/302007-240-240?v=1774899043&width=240&height=240&aspect=true'
  },
  {
    id: 42, nombre: "Jugo de naranja",
    marca: "Del Valle",
    categoria: "Bebidas",
    precio: '$ 130',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/275353-240-240?v=1774904853&width=240&height=240&aspect=true'
  },
  {
    id: 43,
    nombre: "Refresco de cola light",
    marca: "Coca-Cola",
    categoria: "Bebidas",
    precio: '$ 475',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/275464-240-240?v=1774903599&width=240&height=240&aspect=true'
  },
  {
    id: 44,
    nombre: "Gaseosa de naranja",
    marca: "Fanta",
    categoria: "Bebidas",
    precio: '$ 375',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/275289-240-240?v=1774904478&width=240&height=240&aspect=true'
  },
  {
    id: 45,
    nombre: "Pomelo",
    marca: "paso de los toros",
    categoria: "Bebidas",
    precio: '$ 130',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/308955-240-240?v=1774892238&width=240&height=240&aspect=true'
  },
  {
    id: 46,
    nombre: "Guarana",
    marca: "Antartica",
    categoria: "Bebidas",
    precio: '$ 237',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/277282-240-240?v=1774904056&width=240&height=240&aspect=true'
  },
  {
    id: 47,
    nombre: "Tonica",
    marca: "Pasos de los toros",
    categoria: "Bebidas",
    precio: '$ 375',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/308942-240-240?v=1774904206&width=240&height=240&aspect=true'
  },
  {
    id: 48,
    nombre: "Jugo natural",
    marca: "Cepita",
    categoria: "Bebidas",
    precio: '$ 300',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/276040-240-240?v=1774902759&width=240&height=240&aspect=true'
  },
  {
    id: 49,
    nombre: "Sobre de jugo de Naranja",
    marca: "Tang",
    categoria: "Bebidas",
    precio: '$ 60',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/272016-240-240?v=1774905677&width=240&height=240&aspect=true'
  },
  {
    id: 50,
    nombre: "Gaseosa de cola zero",
    marca: "Coca-Cola",
    categoria: "Bebidas",
    precio: '$ 600',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/333788-240-240?v=1774904840&width=240&height=240&aspect=true'
  },
  {
    id: 51,
    nombre: "Hamburguesa de carne",
    marca: "Express",
    categoria: "Congelados",
    precio: '$ 200',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/176840-240-240?v=1774918222&width=240&height=240&aspect=true'
  },
  {
    id: 52,
    nombre: "Hmburguesas clasicas por 12",
    marca: "Paty",
    categoria: "Congelados",
    precio: '$ 150',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/348156-240-240?v=1774919438&width=240&height=240&aspect=true'
  },
  {
    id: 53,
    nombre: "Hamburguesas de carne",
    marca: "Rancho Alto",
    categoria: "Congelados",
    precio: '$ 180',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/176920-240-240?v=1774908695&width=240&height=240&aspect=true'
  },
  {
    id: 54,
    nombre: "Hamburguesas de cerdo",
    marca: "Paladini",
    categoria: "Congelados",
    precio: '$ 250',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/324507-240-240?v=1774904268&width=240&height=240&aspect=true'
  },
  {
    id: 55,
    nombre: "Bocaditos de pollo",
    marca: "Swift",
    categoria: "Congelados",
    precio: '$ 220',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/180014-240-240?v=1774920522&width=240&height=240&aspect=true'
  },
  {
    id: 56,
    nombre: "Supremitas de pollo",
    marca: "Frescoreal",
    categoria: "Congelados",
    precio: '$ 170',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/346811-240-240?v=1774921733&width=240&height=240&aspect=true'
  },
  {
    id: 57,
    nombre: "Milanesas de soja",
    marca: "Granja de sol",
    categoria: "Congelados",
    precio: '$ 190',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/312496-240-240?v=1774921186&width=240&height=240&aspect=true'
  },
  {
    id: 58,
    nombre: "Medallones de pollo",
    marca: "Luchetti",
    categoria: "Congelados",
    precio: '$ 230',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/312529-240-240?v=1774921146&width=240&height=240&aspect=true'
  },
  {
    id: 59,
    nombre: "milanesas de cerdo",
    marca: "Fruiti",
    categoria: "Congelados",
    precio: '$ 1600',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/254351-240-240?v=1774891925&width=240&height=240&aspect=true'
  },
  {
    id: 60,
    nombre: "Medallon de merluza",
    marca: "GourmetFit",
    categoria: "Congelados",
    precio: '$ 280',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/257296-240-240?v=1774921943&width=240&height=240&aspect=true'
  },
  {
    id: 61,
    nombre: "Croquetas de papas",
    marca: "Natural",
    categoria: "Congelados",
    precio: '$ 1300',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/312390-240-240?v=1774907502&width=240&height=240&aspect=true'
  },
  {
    id: 62,
    nombre: "Pizza Congelada",
    marca: "Deliciosa",
    categoria: "Congelados",
    precio: '$ 210',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/336180-240-240?v=1774921297&width=240&height=240&aspect=true'
  },
  {
    id: 63,
    nombre: "Empanadas de jamon y queso",
    marca: "Frescoreal",
    categoria: "Congelados",
    precio: '$ 1800',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/188489-240-240?v=1774910558&width=240&height=240&aspect=true'
  },
  {
    id: 64,
    nombre: "Barritas de mozarella",
    marca: "Delicieux",
    categoria: "Congelados",
    precio: '$ 200',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/257294-240-240?v=1774792691&width=240&height=240&aspect=true'
  },
  {
    id: 65,
    nombre: "Tarta individual",
    marca: "Marítimo",
    categoria: "Congelados",
    precio: '$ 880',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/188491-240-240?v=1774909325&width=240&height=240&aspect=true'
  },
  {
    id: 66,
    nombre: "Croquetas de jamón y queso",
    marca: "Sabrosas",
    categoria: "Congelados",
    precio: '$ 170',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/257292-240-240?v=1774286823&width=240&height=240&aspect=true'
  },
  {
    id: 67,
    nombre: "Acelga congelada",
    marca: "GourmetFit",
    categoria: "Congelados",
    precio: '$ 260',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/184765-240-240?v=1774919732&width=240&height=240&aspect=true'
  },
  {
    id: 68,
    nombre: "Frutillas congeladas",
    marca: "Green",
    categoria: "Congelados",
    precio: '$ 200',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/202472-240-240?v=1774912408&width=240&height=240&aspect=true'
  },
  {
    id: 70,
    nombre: "Salame milan",
    marca: "Tradizione",
    categoria: "Fiambrería",
    precio: '$ 180',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/250648-240-240?v=1774911563&width=240&height=240&aspect=true'
  },
  {
    id: 71,
    nombre: "Jamón cocido",
    marca: "cagnoli",
    categoria: "Fiambrería",
    precio: '$ 250',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/312620-240-240?v=1774918978&width=240&height=240&aspect=true'
  },
  {
    id: 72,
    nombre: "Jamon cocido",
    marca: "Paladini",
    categoria: "Fiambrería",
    precio: '$ 210',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/308175-240-240?v=1774918318&width=240&height=240&aspect=true'
  },
  {
    id: 73,
    nombre: "Mortadela",
    marca: "Casera",
    categoria: "Fiambrería",
    precio: '$ 190',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/250650-240-240?v=1774917243&width=240&height=240&aspect=true'
  },
  {
    id: 74,
    nombre: "Salchichon Primavera",
    marca: "Paladini",
    categoria: "Fiambrería",
    precio: '$ 320',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/309484-240-240?v=1774912043&width=240&height=240&aspect=true'
  },
  {
    id: 75,
    nombre: "Bondiola feteada",
    marca: "Lario",
    categoria: "Fiambrería",
    precio: '$ 280',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/308477-240-240?v=1774908078&width=240&height=240&aspect=true'
  },
  {
    id: 76,
    nombre: "Jamon cocido",
    marca: "Gourmet",
    categoria: "Fiambrería",
    precio: '$ 350',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/308183-240-240?v=1774918803&width=240&height=240&aspect=true'
  },
  {
    id: 77,
    nombre: "Panceta ahumada",
    marca: "Delicia Italiana",
    categoria: "Fiambrería",
    precio: '$ 230',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/213912-240-240?v=1774919549&width=240&height=240&aspect=true'
  },
  {
    id: 78,
    nombre: "Salchichon con jamon",
    marca: "Tradicional",
    categoria: "Fiambrería",
    precio: '$ 240',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/205931-240-240?v=1774876901&width=240&height=240&aspect=true'
  },
  {
    id: 79,
    nombre: "Salamin picado",
    marca: "Saborosa",
    categoria: "Fiambrería",
    precio: '$ 200',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/205533-240-240?v=1774905086&width=240&height=240&aspect=true'
  },
  {
    id: 80,
    nombre: "Salamin tipo español",
    marca: "El bierzo",
    categoria: "Fiambrería",
    precio: '$ 290',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/205532-240-240?v=1774885111&width=240&height=240&aspect=true'
  },
  {
    id: 81,
    nombre: "Queso feteado",
    marca: "Dambo",
    categoria: "Fiambrería",
    precio: '$ 260',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/320191-240-240?v=1774919646&width=240&height=240&aspect=true'
  },
  {
    id: 82,
    nombre: "Mozzarella ",
    marca: "La paulina",
    categoria: "Fiambrería",
    precio: '$ 270',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/234600-240-240?v=1774919326&width=240&height=240&aspect=true'
  },
  {
    id: 83,
    nombre: "Queso rallado",
    marca: "La serenisima",
    categoria: "Fiambrería",
    precio: '$ 240',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/274913-240-240?v=1774920566&width=240&height=240&aspect=true'
  },
  {
    id: 84,
    nombre: "Queso por salud",
    marca: "La serenisima",
    categoria: "Fiambrería",
    precio: '$ 200',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/273883-240-240?v=1774918372&width=240&height=240&aspect=true'
  },
  {
    id: 85,
    nombre: "Queso azul",
    marca: "Lucrecia",
    categoria: "Fiambrería",
    precio: '$ 2800',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/241543-240-240?v=1774919049&width=240&height=240&aspect=true'
  },
  {
    id: 86,
    nombre: "Queso",
    marca: "La serenisima",
    categoria: "Fiambrería",
    precio: '$ 300',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/273893-240-240?v=1774920379&width=240&height=240&aspect=true'
  },
  {
    id: 87,
    nombre: "Queso tybo",
    marca: "puyehue",
    categoria: "Fiambrería",
    precio: '$ 310',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/251166-240-240?v=1774918073&width=240&height=240&aspect=true'
  },
  {
    id: 88,
    nombre: "Manzana",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 400',
    imagen:  'https://carrefourar.vtexassets.com/arquivos/ids/176841-240-240?v=1774906160&width=240&height=240&aspect=true'
  },
  {
    id: 89,
    nombre: "Frutilla",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 800',
    imagen:  'https://carrefourar.vtexassets.com/arquivos/ids/176896-240-240?v=1774906494&width=240&height=240&aspect=true'
  },
  {
    id: 90,
    nombre: "Naranja",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 370',
    imagen:  'https://carrefourar.vtexassets.com/arquivos/ids/248243-240-240?v=1774905023&width=240&height=240&aspect=true'
  },
  {
    id: 91,
    nombre: "Pera",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 299',
    imagen:  'https://carrefourar.vtexassets.com/arquivos/ids/196201-240-240?v=1774905816&width=240&height=240&aspect=true'
  },
  {
    id: 92,
    nombre: "Mandarina",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 150',
    imagen:  'https://carrefourar.vtexassets.com/arquivos/ids/178192-240-240?v=1774905229&width=240&height=240&aspect=true'
  },
  {
    id: 93,
    nombre: "piña",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 740',
    imagen:  'https://carrefourar.vtexassets.com/arquivos/ids/201740-240-240?v=1774905520&width=240&height=240&aspect=true'
  },
  {
    id: 94,
    nombre: "Limon",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 280',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/176854-240-240?v=1774905752&width=240&height=240&aspect=true'
  },
  {
    id: 95,
    nombre: "Lima",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 699',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/201750-240-240?v=1774905084&width=240&height=240&aspect=true'
  },
  {
    id: 96,
    nombre: "Kiwi",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 950',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/176827-240-240?v=1774898205&width=240&height=240&aspect=true'
  },
  {
    id: 97,
    nombre: "Pomelo",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 489',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/205551-240-240?v=1774900886&width=240&height=240&aspect=true'
  },
  {
    id: 98,
    nombre: "Cebolla Blanca",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 490',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/206128-240-240?v=1774905771&width=240&height=240&aspect=true'
  },
  {
    id: 99,
    nombre: "Lechuga",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 460',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/184472-240-240?v=1774906680&width=240&height=240&aspect=true'
  },
  {
    id: 100,
    nombre: "Tomate",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 800',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/184380-240-240?v=1774907119&width=240&height=240&aspect=true'
  },
  {
    id: 101,
    nombre: "Zanahoria",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 270',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/226755-240-240?v=1774907600&width=240&height=240&aspect=true'
  },
  {
    id: 102,
    nombre: "Papa",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 90',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/184447-240-240?v=1774907048&width=240&height=240&aspect=true'
  },
  {
    id: 103,
    nombre: "Pimiento",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 60',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/184457-240-240?v=1774907517&width=240&height=240&aspect=true'
  },
  {
    id: 104,
    nombre: "Repollo colorado",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 580',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/201730-240-240?v=1774905085&width=240&height=240&aspect=true'
  },
  {
    id: 105,
    nombre: "Cebolla",
    marca: 'El kg.',
    categoria: "FrutasYVerduras",
    precio: '$ 300',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/196196-240-240?v=1774907603&width=240&height=240&aspect=true'
  },
  {
    id: 106,
    nombre: "Detergente líquido",
    marca: "Cif",
    categoria: "Limpieza",
    precio: "$150",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/261793-300-300?v=638023413809130000&width=300&height=300&aspect=true'
  },
  {
    id: 107,
    nombre: "Limpiavidrios",
    marca: "Zorro",
    categoria: "Limpieza",
    precio: "$80",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/204897-300-300?v=637850727762970000&width=300&height=300&aspect=true'
  },
  {
    id: 108,
    nombre: "Jabón en barra",
    marca: "Dove",
    categoria: "Limpieza",
    precio: "$50",
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/309385-500-auto?v=638150911811870000&width=500&height=auto&aspect=true'
  },
  {
    id: 109,
    nombre: "Desinfectante multiusos",
    marca: "Cif",
    categoria: "Limpieza",
    precio: "$120",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/217319-300-300?v=637854084295130000&width=300&height=300&aspect=true'
  },
  {
    id: 110,
    nombre: "Limpiador de pisos",
    marca: "Procenex",
    categoria: "Limpieza",
    precio: "$180",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/159013-300-300?v=637835129110630000&width=300&height=300&aspect=true'
  },
  {
    id: 111,
    nombre: "Detergente en polvo",
    marca: "Ala",
    categoria: "Limpieza",
    precio: "$200",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/243675-300-300?v=637869838043500000&width=300&height=300&aspect=true'
  },
  {
    id: 112,
    nombre: "Esponja de cocina",
    marca: "multiuso",
    categoria: "Limpieza",
    precio: "$40",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/156872-300-300?v=637835124404470000&width=300&height=300&aspect=true'
  },
  {
    id: 113,
    nombre: "Desodorante ambiental",
    marca: "Poet",
    categoria: "Limpieza",
    precio: "$70",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/252983-300-300?v=637935177893200000&width=300&height=300&aspect=true'
  },
  {
    id: 114,
    nombre: "Pañuelos de papel",
    marca: "Elegante",
    categoria: "Limpieza",
    precio: "$90",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/249054-300-300?v=637895434079870000&width=300&height=300&aspect=true'
  },
  {
    id: 115,
    nombre: "Limpiador de baños",
    marca: "Cif",
    categoria: "Limpieza",
    precio: "$150",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/286962-300-300?v=638224401699830000&width=300&height=300&aspect=true'
  },
  {
    id: 116,
    nombre: "Toallas Humedas",
    marca: "Scott",
    categoria: "Limpieza",
    precio: "$120",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/222637-300-300?v=637855155194770000&width=300&height=300&aspect=true'
  },
  {
    id: 117,
    nombre: "desodorante de ambiente",
    marca: "Poett",
    categoria: "Limpieza",
    precio: "$100",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/252988-300-300?v=637935177905800000&width=300&height=300&aspect=true'
  },
  {
    id: 118,
    nombre: "Lavandina",
    marca: "Ayudín",
    categoria: "Limpieza",
    precio: "$60",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/223111-300-300?v=637855259802300000&width=300&height=300&aspect=true'
  },
  {
    id: 119,
    nombre: "Guantes de limpieza",
    marca: "Mapa",
    categoria: "Limpieza",
    precio: "$80",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/225178-300-300?v=637855395193930000&width=300&height=300&aspect=true'
  },
  {
    id: 120,
    nombre: "Papel higiénico",
    marca: "Higienol",
    categoria: "Limpieza",
    precio: "$110",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/284010-300-300?v=638206474952270000&width=300&height=300&aspect=true'
  },
  {
    id: 121,
    nombre: "Quitamanchas",
    marca: "Vanish",
    categoria: "Limpieza",
    precio: "$130",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/158525-300-300?v=637835128388570000&width=300&height=300&aspect=true'
  },
  {
    id: 122,
    nombre: "limpiador de pisos",
    marca: "Cif",
    categoria: "Limpieza",
    precio: "$160",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/260298-300-300?v=638013045920130000&width=300&height=300&aspect=true'
  },
  {
    id: 123,
    nombre: "Desengrasante",
    marca: "mr musculo",
    categoria: "Limpieza",
    precio: "$90",
    imagen: 'https://masonlineprod.vtexassets.com/arquivos/ids/256703-300-300?v=637968117985900000&width=300&height=300&aspect=true'
  },
  {
    id: 124,
    marca: 'El kg.',
    nombre: "Pan Baguette",
    categoria: "Panadería",
    precio: '$ 50',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/250004-240-240?v=1774923511&width=240&height=240&aspect=true'
  },
  {
    id: 125,
    marca: 'El kg.',
    nombre: "Medialunas",
    categoria: "Panadería",
    precio: '$ 30',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/175073-240-240?v=1774918488&width=240&height=240&aspect=true'
  },
  {
    id: 126,
    marca: 'El kg.',
    nombre: "Facturas",
    categoria: "Panadería",
    precio: '$ 40',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/204861-240-240?v=1774922699&width=240&height=240&aspect=true'
  },
  {
    id: 127,
    marca: 'El kg.',
    nombre: "Baguette",
    categoria: "Panadería",
    precio: '$ 60',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/255891-240-240?v=1774890478&width=240&height=240&aspect=true'
  },
  {
    id: 128,
    marca: 'El kg.',
    nombre: "Roscas de limon",
    categoria: "Panadería",
    precio: '$ 35',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/175064-240-240?v=1774882686&width=240&height=240&aspect=true'
  },
  {
    id: 129,
    marca: 'El kg.',
    nombre: "Panes integrales",
    categoria: "Panadería",
    precio: '$ 55',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/175092-240-240?v=1774889705&width=240&height=240&aspect=true'
  },
  {
    id: 130,
    marca: 'El kg.',
    nombre: "Bollos de canela",
    categoria: "Panadería",
    precio: '$ 45',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/255948-240-240?v=1774877345&width=240&height=240&aspect=true'
  },
  {
    id: 131,
    marca: 'El kg.',
    nombre: "Pan con semillas",
    categoria: "Panadería",
    precio: '$ 25',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/258163-240-240?v=1774923582&width=240&height=240&aspect=true'
  },
  {
    id: 132,
    marca: 'El kg.',
    nombre: "Pan de Mesa",
    categoria: "Panadería",
    precio: '$ 65',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/274322-240-240?v=1774923593&width=240&height=240&aspect=true'
  },
  {
    id: 133,
    marca: 'El kg.',
    nombre: "Pan para hanburguesas",
    categoria: "Panadería",
    precio: '$ 40',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/274323-240-240?v=1774918472&width=240&height=240&aspect=true'
  },
  {
    id: 134,
    marca: 'El kg.',
    nombre: "pan de campo",
    categoria: "Panadería",
    precio: '$ 30',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/191719-240-240?v=1774920026&width=240&height=240&aspect=true'
  },
  {
    id: 135,
    marca: 'El kg.',
    nombre: "Pan de mesa artesanal",
    categoria: "Panadería",
    precio: '$ 50',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/179777-240-240?v=1774922281&width=240&height=240&aspect=true'
  },
  {
    id: 136,
    marca: 'El kg.',
    nombre: "Donas",
    categoria: "Panadería",
    precio: '$ 35',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/249150-240-240?v=1774898663&width=240&height=240&aspect=true'
  },
  {
    id: 137,
    marca: 'El kg.',
    nombre: "madalenas",
    categoria: "Panadería",
    precio: '$ 40',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/175082-240-240?v=1774924436&width=240&height=240&aspect=true'
  },
  {
    id: 138,
    marca: 'El kg.',
    nombre: "Pastaflora",
    categoria: "Panadería",
    precio: '$ 1500',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/197308-240-240?v=1774890731&width=240&height=240&aspect=true'
  },
  {
    id: 139,
    marca: 'El kg.',
    nombre: "Pepas artesanales",
    categoria: "Panadería",
    precio: '$ 80',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/214051-240-240?v=1774877180&width=240&height=240&aspect=true'
  },
  {
    id: 140,
    marca: 'El kg.',
    nombre: "Pan de migas x 10 U",
    categoria: "Panadería",
    precio: '$ 750',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/273423-240-240?v=1774905743&width=240&height=240&aspect=true'
  },
  {
    id: 141,
    marca: 'El kg.',
    nombre: "Biscochuelo de vainilla",
    categoria: "Panadería",
    precio: '$ 70',
    imagen: 'https://carrefourar.vtexassets.com/arquivos/ids/255997-240-240?v=1774877305&width=240&height=240&aspect=true'
  },
];