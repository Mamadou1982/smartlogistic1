import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SmartCIDemo() {
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('admin@smartci.ci');
  const [password, setPassword] = useState('Admin@2026');
  const [page, setPage] = useState('Dashboard');
  const [notifications, setNotifications] = useState(3);
  const [darkMode, setDarkMode] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: '#CMD1250',
      client: 'Grace Assi',
      phone: '+225 07 11 22 33 44',
      commune: 'Cocody',
      quartier: 'Riviera 2',
      produits: 'Riz 25kg x2, Huile 5L x1',
      livreur: 'Adjoua Kone',
      paiement: 'Orange Money',
      status: 'En livraison',
      total: '13 000 FCFA',
      date: '13 Mai 2026',
    },
    {
      id: '#CMD1249',
      client: 'Kouadio Yao',
      phone: '+225 05 44 55 66 77',
      commune: 'Yopougon',
      quartier: 'Niangon',
      produits: 'Sucre 1kg x10',
      livreur: 'Bakary Traore',
      paiement: 'Wave',
      status: 'Preparation',
      total: '9 500 FCFA',
      date: '12 Mai 2026',
    },
    {
      id: '#CMD1248',
      client: 'Traore Ibrahim',
      phone: '+225 01 88 77 66 55',
      commune: 'Marcory',
      quartier: 'Zone 4',
      produits: 'Huile 5L x3',
      livreur: 'Moussa Diallo',
      paiement: 'MTN Money',
      status: 'Livree',
      total: '15 000 FCFA',
      date: '11 Mai 2026',
    },
  ]);

  const [drivers, setDrivers] = useState([
    {
      firstName: 'Adjoua',
      lastName: 'Kone',
      phone: '+225 07 08 09 10 11',
      zone: 'Cocody',
      status: 'Disponible',
    },
    {
      firstName: 'Bakary',
      lastName: 'Traore',
      phone: '+225 05 04 03 02 01',
      zone: 'Yopougon',
      status: 'En mission',
    },
    {
      firstName: 'Moussa',
      lastName: 'Diallo',
      phone: '+225 01 02 03 04 05',
      zone: 'Marcory',
      status: 'Disponible',
    },
  ]);

  const communes = [
    'Abobo',
    'Adjame',
    'Anyama',
    'Attecoube',
    'Bingerville',
    'Cocody',
    'Koumassi',
    'Marcory',
    'Plateau',
    'Port-Bouet',
    'Songon',
    'Treichville',
    'Yopougon',
    'Alepe',
    'Azaguie',
    'Bonoua',
    'Dabou',
    'Grand-Bassam',
    'Jacqueville',
    'Sikensi',
    'Tiassale',
    'Toumodi',
    'Yamoussoukro',
    'Bouake',
    'San Pedro',
    'Korhogo',
    'Daloa',
    'Man',
    'Gagnoa',
    'Abengourou',
    'Bondoukou',
    'Odienne',
    'Soubre',
    'Agboville',
    'Aboisso',
    'Issia',
    'Ferkessedougou',
    'Seguela',
    'Mankono',
    'Bouna',
    'Touba',
    'Duekoue',
    'Sassandra',
    'Tabou',
    'Divo',
    'Lakota',
    'Oume',
    'Guiglo',
    'Toulepleu',
    'Zuenoula',
    'Boundiali',
    'Katiola',
    'Sinfra',
    'Vavoua',
    'Meagui',
    'Tanda',
    'Daoukro',
    'Arrah',
    'MBahiakro',
  ];

  const [selectedCommune, setSelectedCommune] = useState('Cocody');
  const [showAddDriver, setShowAddDriver] = useState(false);
  const [newDriverFirstName, setNewDriverFirstName] = useState('');
  const [newDriverLastName, setNewDriverLastName] = useState('');
  const [newDriverPhone, setNewDriverPhone] = useState('');
  const [newDriverZone, setNewDriverZone] = useState('Cocody');

  const [products, setProducts] = useState([
    { name: 'Riz 25kg', stock: 22, price: '18 000 FCFA' },
    { name: 'Huile 5L', stock: 9, price: '6 500 FCFA' },
    { name: 'Sucre 1kg', stock: 42, price: '800 FCFA' },
  ]);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAddOrder, setShowAddOrder] = useState(false);

  const [newOrderClient, setNewOrderClient] = useState('');
  const [newOrderPhone, setNewOrderPhone] = useState('');
  const [newOrderQuartier, setNewOrderQuartier] = useState('');
  const [newOrderProducts, setNewOrderProducts] = useState('');
  const [newOrderAmount, setNewOrderAmount] = useState('');
  const [newOrderPayment, setNewOrderPayment] = useState('Orange Money');
  const [newProductName, setNewProductName] = useState('');
  const [newProductStock, setNewProductStock] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const [activities, setActivities] = useState([
    'Nouvelle commande cree',
    'Livreur assigné automatiquement',
    'Paiement Mobile Money valide',
    'Stock synchronise',
  ]);

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [payments] = useState([
    {
      method: 'Orange Money',
      amount: '25 000 FCFA',
      status: 'Validé',
    },
    {
      method: 'Wave',
      amount: '13 500 FCFA',
      status: 'En attente',
    },
  ]);

  const menus = [
    'Dashboard',
    'Commandes',
    'Produits',
    'Stocks',
    'Livreurs',
    'Paiements',
    'Statistiques',
    'Support',
  ];

  const stats = [
    { title: 'Commandes', value: '1 248' },
    { title: 'Livraisons', value: '326' },
    { title: 'Clients', value: '2 456' },
    { title: 'Revenus', value: '12 850 000 FCFA' },
  ];

  const analyticsData = {
    semaine: {
      ventes: '3 250 000 FCFA',
      commandes: 326,
      retours: 12,
      pertes: '120 000 FCFA',
      benefices: '1 850 000 FCFA',
    },
    mois: {
      ventes: '12 850 000 FCFA',
      commandes: 1248,
      retours: 38,
      pertes: '430 000 FCFA',
      benefices: '6 200 000 FCFA',
    },
    annee: {
      ventes: '152 000 000 FCFA',
      commandes: 15420,
      retours: 412,
      pertes: '3 500 000 FCFA',
      benefices: '74 000 000 FCFA',
    },
  };

  const [analyticsPeriod, setAnalyticsPeriod] = useState('mois');

  const orderStatuses = [
    'Preparation',
    'Assignee',
    'En livraison',
    'Livree',
    'Retournee',
    'Annulee',
  ];

  const addOrder = () => {
    if (
      !newOrderClient ||
      !newOrderPhone ||
      !newOrderQuartier ||
      !newOrderProducts ||
      !newOrderAmount
    ) {
      return;
    }

    const availableDriver = drivers.find(
      (driver) =>
        driver.zone === selectedCommune &&
        driver.status === 'Disponible'
    );

    const newOrder = {
      id: `#CMD${Math.floor(Math.random() * 9000)}`,
      client: newOrderClient,
      phone: newOrderPhone,
      quartier: newOrderQuartier,
      produits: newOrderProducts,
      livreur: availableDriver
        ? `${availableDriver.firstName} ${availableDriver.lastName}`
        : 'Non assigne',
      paiement: newOrderPayment,
      commune: selectedCommune,
      status: 'Preparation',
      total: `${newOrderAmount} FCFA`,
      date: "Aujourd'hui",
    };

    setOrders((prev) => [newOrder, ...prev]);
    setShowAddOrder(false);
    setNotifications((prev) => prev + 1);

    setNewOrderClient('');
    setNewOrderPhone('');
    setNewOrderQuartier('');
    setNewOrderProducts('');
    setNewOrderAmount('');

    setActivities((prev) => [
      `Nouvelle commande ${newOrder.id} cree pour ${newOrder.client}`,
      ...prev,
    ]);
  };

  const addProduct = () => {
    if (!newProductName || !newProductStock || !newProductPrice) {
      return;
    }

    const newProduct = {
      name: newProductName,
      stock: Number(newProductStock),
      price: newProductPrice,
    };

    setProducts((prev) => [newProduct, ...prev]);
    setShowAddProduct(false);
    setNewProductName('');
    setNewProductStock('');
    setNewProductPrice('');

    setActivities((prev) => [
      `Produit ${newProduct.name} ajoute au stock`,
      ...prev,
    ]);
  };

  const toggleDriverStatus = (index) => {
    const updated = [...drivers];
    updated[index].status =
      updated[index].status === 'Disponible'
        ? 'En mission'
        : 'Disponible';

    setDrivers(updated);
  };

  const addDriver = () => {
    if (!newDriverFirstName || !newDriverLastName || !newDriverPhone) return;

    const newDriver = {
      firstName: newDriverFirstName,
      lastName: newDriverLastName,
      phone: newDriverPhone,
      zone: newDriverZone,
      status: 'Disponible',
    };

    setDrivers((prev) => [newDriver, ...prev]);
    setShowAddDriver(false);
    setNewDriverFirstName('');
    setNewDriverLastName('');
    setNewDriverPhone('');
    setActivities((prev) => [
      `Nouveau livreur ${newDriver.firstName} ${newDriver.lastName} ajoute`,
      ...prev,
    ]);
  };

  const deleteDriver = (index) => {
    const updated = drivers.filter((_, i) => i !== index);
    setDrivers(updated);
  };

  const updateOrderStatus = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;

    setOrders(updatedOrders);

    setActivities((prev) => [
      `Commande ${updatedOrders[index].id} passee au statut ${newStatus}`,
      ...prev,
    ]);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Preparation':
        return 'bg-orange-100 text-orange-600';
      case 'Assignee':
        return 'bg-blue-100 text-blue-600';
      case 'En livraison':
        return 'bg-yellow-100 text-yellow-700';
      case 'Livree':
        return 'bg-green-100 text-green-600';
      case 'Retournee':
        return 'bg-purple-100 text-purple-600';
      case 'Annulee':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  const processPayment = (method) => {
    setSelectedPayment(method);

    setTimeout(() => {
      setPaymentSuccess(true);

      setActivities((prev) => [
        `Paiement ${method} valide avec succes`,
        ...prev,
      ]);
    }, 1200);
  };

  const closePaymentSystem = () => {
    setShowPaymentModal(false);
    setPaymentSuccess(false);
    setSelectedPayment('');
  };

  const bgMain = darkMode
    ? 'bg-slate-950 text-white'
    : 'bg-slate-100 text-slate-900';

  const cardBg = darkMode ? 'bg-slate-900' : 'bg-white';

  const filteredOrders = orders.filter(
    (order) => order.commune === selectedCommune
  );

  const filteredDrivers = drivers.filter(
    (driver) => driver.zone === selectedCommune
  );

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white w-full max-w-md rounded-[30px] p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-500">SmartCI</h1>
            <p className="text-slate-500 mt-2">
              Plateforme logistique intelligente
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-2xl px-4 py-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-2xl px-4 py-4"
              />
            </div>

            <button
              onClick={() => setIsLogged(true)}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold text-lg"
            >
              Connexion
            </button>
          </div>

          <div className="mt-8 bg-slate-100 rounded-2xl p-4 text-sm text-slate-600">
            <p className="font-bold mb-2">Compte démo</p>
            <p>Email : admin@smartci.ci</p>
            <p>Mot de passe : Admin@2026</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex ${bgMain} transition-all duration-300`}>
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white p-6 flex flex-col justify-between shadow-2xl border-r border-white/10">
        <div>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-2xl shadow-lg">
                📦
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">SmartLogistic</h1>
                <p className="text-blue-200 text-sm">ERP Livraison Premium</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Logistics Platform</p>
          </div>

          <nav className="space-y-3">
            {menus.map((item) => (
              <button
                key={item}
                onClick={() => setPage(item)}
                className={`w-full text-left rounded-2xl px-5 py-4 transition-all flex items-center justify-between font-medium ${
                  page === item
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-900 hover:bg-slate-800'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-2xl p-5 text-black">
          <h3 className="font-bold text-xl mb-3">Zone de livraison</h3>

          <select
            value={selectedCommune}
            onChange={(e) => setSelectedCommune(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          >
            {communes.map((commune) => (
              <option key={commune}>{commune}</option>
            ))}
          </select>

          <p className="mt-3 text-sm">
            Zone active :
            <span className="font-bold text-blue-600 ml-2">
              {selectedCommune}
            </span>
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full bg-green-500 py-3 rounded-2xl font-bold"
          >
            {darkMode ? 'Mode Clair' : 'Mode Sombre'}
          </button>

          <div className="bg-slate-900 p-4 rounded-2xl">
            <p className="text-sm text-slate-400">Connecté en tant que</p>
            <h2 className="font-bold mt-1">Administrateur</h2>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_25%)]">
        {/* Header */}
        <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/80 border border-white/40 shadow-2xl rounded-[32px] px-8 py-6 flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold">{page}</h1>
            <p className="opacity-70 mt-2">
              Plateforme intelligente de gestion logistique
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Rechercher une commande, un client..."
              className="px-6 py-4 rounded-2xl border border-slate-200 bg-white text-black w-80 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
            />

            <button
              onClick={() => setNotifications(0)}
              className="relative bg-white text-black px-5 py-3 rounded-2xl font-semibold"
            >
              🔔
              {notifications > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {notifications}
                </span>
              )}
            </button>

            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
              SmartCI AI
            </button>

            <button
              onClick={() => setShowPaymentModal(true)}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl"
            >
              Mobile Money
            </button>
          </div>
        </div>

        {page === 'Dashboard' && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className={`${cardBg} rounded-[32px] p-7 shadow-xl border border-white/40 transition-all hover:scale-[1.03] hover:-translate-y-1`}
                >
                  <p className="opacity-70 mb-3">{stat.title}</p>
                  <h2 className="text-3xl font-bold">{stat.value}</h2>
                </div>
              ))}
            </div>

            {/* Dashboard Sections */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className={`${cardBg} col-span-2 rounded-3xl p-6 shadow-sm`}>
                <div className="flex flex-wrap justify-between gap-4 items-center mb-6">
                  <h2 className="text-2xl font-bold">Gestion des commandes</h2>

                  <button
                    onClick={() => setShowAddOrder(true)}
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-2xl font-semibold transition-all"
                  >
                    + Nouvelle commande
                  </button>
                </div>

                <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 rounded-2xl p-5 border">
                    <p className="text-slate-500">Total commandes</p>
                    <h3 className="text-3xl font-bold mt-2">24</h3>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
                    <p className="text-green-600">Livrees</p>
                    <h3 className="text-3xl font-bold mt-2 text-green-600">15</h3>
                  </div>

                  <div className="bg-orange-50 rounded-2xl p-5 border border-orange-200">
                    <p className="text-orange-600">En livraison</p>
                    <h3 className="text-3xl font-bold mt-2 text-orange-600">7</h3>
                  </div>

                  <div className="bg-red-50 rounded-2xl p-5 border border-red-200">
                    <p className="text-red-600">Annulees</p>
                    <h3 className="text-3xl font-bold mt-2 text-red-600">2</h3>
                  </div>
                </div>

                <div className="overflow-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr className="text-left opacity-70 border-b">
                        <th className="p-5">Commande</th>
                        <th className="p-5">Client</th>
                        <th className="p-5">Statut</th>
                        <th className="p-5">Montant</th>
                        <th className="p-5">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredOrders.map((order) => (
                        <tr key={order.id} className="border-b last:border-none">
                          <td className="p-5 font-bold text-blue-600">{order.id}</td>
                          <td className="p-5">
                              <div>
                                <p className="font-semibold">{order.client}</p>
                                <p className="text-sm text-slate-500 mt-1">
                                  {order.phone}
                                </p>
                              </div>
                            </td>
                          <td className="p-5">
                              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </td>
                          <td className="p-5 font-bold text-green-600">{order.total}</td>

                            <td className="p-5">
                              <button
                                onClick={() => {
                                  setSelectedOrder(order);
                                  setShowOrderDetails(true);
                                }}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl shadow-lg"
                              >
                                Voir details
                              </button>
                            </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 text-white rounded-[36px] p-8 shadow-2xl border border-blue-500/20 overflow-hidden relative">
                <h2 className="text-2xl font-bold mb-6">Suivi GPS</h2>

                <div className="bg-white/10 backdrop-blur-xl rounded-[32px] h-72 border border-white/10 flex items-center justify-center text-center relative overflow-hidden">
                  <div>
                    <div className="text-7xl mb-3">🛰️</div>
                    <p>Carte GPS Interactive</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {page === 'Commandes' && (
          <div className={`${cardBg} rounded-3xl p-8 shadow-sm`}>
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold">Gestion complète des commandes</h2>

              <div className="flex gap-4">
                <select
                  value={selectedCommune}
                  onChange={(e) => setSelectedCommune(e.target.value)}
                  className="border rounded-2xl px-4 py-3"
                >
                  {communes.map((commune) => (
                    <option key={commune}>{commune}</option>
                  ))}
                </select>

                <button
                  onClick={() => setShowAddOrder(true)}
                  className="bg-green-500 text-white px-6 py-3 rounded-2xl"
                >
                  Nouvelle commande
                </button>
              </div>
            </div>

            <div className="space-y-5">
              {filteredOrders.map((order, index) => (
                <div
                  key={index}
                  className="border rounded-3xl p-6 grid xl:grid-cols-5 gap-6 items-center hover:shadow-lg transition-all"
                >
                  <div>
                    <h3 className="font-bold text-2xl">{order.id}</h3>
                    <p className="font-semibold mt-2">{order.client}</p>
                    <p className="text-sm opacity-70 mt-1">
                      📞 {order.phone}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold">Zone</p>
                    <p>{order.commune}</p>
                    <p className="text-sm text-blue-500 mt-1">
                      {order.quartier}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold">Produits</p>
                    <p className="text-sm mt-2 opacity-80">
                      {order.produits}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold mb-2">Statut</p>
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(index, e.target.value)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border-0 ${getStatusColor(order.status)}`}
                    >
                      {orderStatuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>

                    <p className="text-sm mt-3 opacity-70">
                      🚚 {order.livreur}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-2xl text-green-500">
                      {order.total}
                    </p>

                    <p className="text-sm opacity-70 mt-2">
                      💳 {order.paiement}
                    </p>

                    <p className="text-sm opacity-60 mt-1">
                      📅 {order.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'Stocks' && (
          <div className={`${cardBg} rounded-3xl p-8 shadow-sm`}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Gestion du stock</h2>

              <div className="bg-green-500 text-white px-5 py-3 rounded-2xl font-bold">
                Stock synchronise
              </div>
            </div>

            <div className="overflow-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left opacity-70">
                    <th className="pb-4">Produit</th>
                    <th className="pb-4">Stock</th>
                    <th className="pb-4">Prix</th>
                    <th className="pb-4">Etat</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-5 font-bold">{product.name}</td>
                      <td>{product.stock}</td>
                      <td>{product.price}</td>
                      <td>
                        <span
                          className={`px-4 py-2 rounded-full text-white ${
                            product.stock < 10
                              ? 'bg-red-500'
                              : 'bg-green-500'
                          }`}
                        >
                          {product.stock < 10 ? 'Stock faible' : 'Disponible'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {page === 'Produits' && (
          <div className={`${cardBg} rounded-3xl p-8 shadow-sm`}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Gestion des produits</h2>

              <button
                onClick={() => setShowAddProduct(true)}
                className="bg-blue-500 text-white px-6 py-3 rounded-2xl"
              >
                Ajouter produit
              </button>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="border rounded-3xl p-6"
                >
                  <div className="text-5xl mb-4">📦</div>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="mt-2 opacity-70">Stock : {product.stock}</p>
                  <p className="mt-2 font-bold text-green-500">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'Livreurs' && (
          <div className={`${cardBg} rounded-3xl p-8 shadow-sm`}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Gestion des livreurs</h2>

              <button
                onClick={() => setShowAddDriver(true)}
                className="bg-green-500 text-white px-6 py-3 rounded-2xl"
              >
                Ajouter livreur
              </button>
            </div>

            <div className="space-y-5">
              {filteredDrivers.map((driver, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-5 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-bold">
                      {driver.firstName} {driver.lastName}
                    </h3>
                    <p>{driver.zone}</p>
                    <p className="text-sm mt-1 opacity-70">
                      📞 {driver.phone}
                    </p>
                    <p className="text-sm text-green-500 mt-1">
                      Zone active compatible
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleDriverStatus(index)}
                      className={`px-5 py-3 rounded-xl text-white ${
                        driver.status === 'Disponible'
                          ? 'bg-green-500'
                          : 'bg-orange-500'
                      }`}
                    >
                      {driver.status}
                    </button>

                    <button
                      onClick={() => deleteDriver(index)}
                      className="bg-red-500 text-white px-5 py-3 rounded-xl"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'Paiements' && (
          <div className={`${cardBg} rounded-3xl p-8 shadow-sm`}>
            <h2 className="text-3xl font-bold mb-8">Paiements Mobile Money</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {payments.map((payment, index) => (
                <div
                  key={index}
                  className="border rounded-3xl p-6"
                >
                  <div className="text-5xl mb-4">💳</div>
                  <h3 className="text-2xl font-bold">{payment.method}</h3>
                  <p className="mt-2">{payment.amount}</p>
                  <div className="mt-4 bg-green-500 text-white inline-block px-4 py-2 rounded-xl">
                    {payment.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'Statistiques' && (
          <div className={`${cardBg} rounded-3xl p-8 shadow-sm`}>
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold">Statistiques & Analytics</h2>

              <select
                value={analyticsPeriod}
                onChange={(e) => setAnalyticsPeriod(e.target.value)}
                className="border rounded-2xl px-5 py-3"
              >
                <option value="semaine">Cette semaine</option>
                <option value="mois">Ce mois</option>
                <option value="annee">Cette année</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mb-8">
              <div className="bg-green-500 text-white rounded-3xl p-6">
                <h3 className="text-lg font-semibold">Ventes</h3>
                <p className="text-3xl font-bold mt-4">
                  {analyticsData[analyticsPeriod].ventes}
                </p>
              </div>

              <div className="bg-blue-500 text-white rounded-3xl p-6">
                <h3 className="text-lg font-semibold">Commandes</h3>
                <p className="text-3xl font-bold mt-4">
                  {analyticsData[analyticsPeriod].commandes}
                </p>
              </div>

              <div className="bg-orange-500 text-white rounded-3xl p-6">
                <h3 className="text-lg font-semibold">Retours</h3>
                <p className="text-3xl font-bold mt-4">
                  {analyticsData[analyticsPeriod].retours}
                </p>
              </div>

              <div className="bg-red-500 text-white rounded-3xl p-6">
                <h3 className="text-lg font-semibold">Pertes</h3>
                <p className="text-3xl font-bold mt-4">
                  {analyticsData[analyticsPeriod].pertes}
                </p>
              </div>

              <div className="bg-slate-900 text-white rounded-3xl p-6">
                <h3 className="text-lg font-semibold">Benefices</h3>
                <p className="text-3xl font-bold mt-4">
                  {analyticsData[analyticsPeriod].benefices}
                </p>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 gap-6">
              <div className="border rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Performance commerciale
                </h3>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Taux de livraison</span>
                      <span className="font-bold">96%</span>
                    </div>
                    <div className="bg-slate-200 h-4 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-[96%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Satisfaction clients</span>
                      <span className="font-bold">98%</span>
                    </div>
                    <div className="bg-slate-200 h-4 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[98%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Taux de retour</span>
                      <span className="font-bold">4%</span>
                    </div>
                    <div className="bg-slate-200 h-4 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full w-[4%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Resume financier
                </h3>

                <div className="space-y-4 text-lg">
                  <div className="flex justify-between border-b pb-3">
                    <span>Chiffre affaires</span>
                    <span className="font-bold text-green-500">
                      {analyticsData[analyticsPeriod].ventes}
                    </span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span>Pertes logistiques</span>
                    <span className="font-bold text-red-500">
                      {analyticsData[analyticsPeriod].pertes}
                    </span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span>Retours commandes</span>
                    <span className="font-bold text-orange-500">
                      {analyticsData[analyticsPeriod].retours}
                    </span>
                  </div>

                  <div className="flex justify-between pt-3 text-2xl font-bold">
                    <span>Benefice net</span>
                    <span className="text-blue-500">
                      {analyticsData[analyticsPeriod].benefices}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {page === 'Support' && (
          <div className={`${cardBg} rounded-3xl p-8 shadow-sm`}>
            <h2 className="text-3xl font-bold mb-8">Centre de support</h2>

            <div className="space-y-6">
              <div className="border rounded-2xl p-6">
                <h3 className="font-bold text-xl">Support Technique</h3>
                <p className="mt-2 opacity-70">
                  Assistance système et maintenance.
                </p>
              </div>

              <div className="border rounded-2xl p-6">
                <h3 className="font-bold text-xl">Support Livraison</h3>
                <p className="mt-2 opacity-70">
                  Gestion des incidents de livraison.
                </p>
              </div>
            </div>
          </div>
        )}

        {showOrderDetails && selectedOrder && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6 overflow-auto">
            <div className="bg-white w-full max-w-6xl rounded-[35px] overflow-hidden shadow-2xl">
              <div className="p-8 border-b bg-slate-50 flex justify-between items-start">
                <div>
                  <h2 className="text-4xl font-bold text-slate-900">
                    Details de la commande
                  </h2>
                  <p className="text-blue-600 font-bold text-2xl mt-3">
                    {selectedOrder.id}
                  </p>
                </div>

                <button
                  onClick={() => setShowOrderDetails(false)}
                  className="text-4xl text-slate-500 hover:text-black"
                >
                  ✕
                </button>
              </div>

              <div className="p-8 grid xl:grid-cols-4 gap-6 bg-white">
                <div className="border rounded-3xl p-6">
                  <h3 className="font-bold text-xl mb-5 text-blue-600">
                    Informations client
                  </h3>

                  <div className="space-y-4">
                    <p><span className="font-bold">Client :</span> {selectedOrder.client}</p>
                    <p><span className="font-bold">Telephone :</span> {selectedOrder.phone}</p>
                    <p><span className="font-bold">Commune :</span> {selectedOrder.commune}</p>
                    <p><span className="font-bold">Quartier :</span> {selectedOrder.quartier}</p>
                  </div>
                </div>

                <div className="border rounded-3xl p-6">
                  <h3 className="font-bold text-xl mb-5 text-purple-600">
                    Informations commande
                  </h3>

                  <div className="space-y-4">
                    <p><span className="font-bold">Produits :</span> {selectedOrder.produits}</p>
                    <p><span className="font-bold">Paiement :</span> {selectedOrder.paiement}</p>
                    <p><span className="font-bold">Montant :</span> {selectedOrder.total}</p>
                    <p><span className="font-bold">Date :</span> {selectedOrder.date}</p>
                  </div>
                </div>

                <div className="border rounded-3xl p-6">
                  <h3 className="font-bold text-xl mb-5 text-orange-600">
                    Livreur assigne
                  </h3>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-5xl mb-4">
                      👨🏾
                    </div>

                    <p className="font-bold text-xl">{selectedOrder.livreur}</p>

                    <div className="mt-4 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                      {selectedOrder.status}
                    </div>
                  </div>
                </div>

                <div className="border rounded-3xl p-6">
                  <h3 className="font-bold text-xl mb-5 text-green-600">
                    Timeline livraison
                  </h3>

                  <div className="space-y-5">
                    <div className="flex gap-3">
                      <div className="w-4 h-4 rounded-full bg-orange-500 mt-1"></div>
                      <div>
                        <p className="font-bold">Preparation</p>
                        <p className="text-sm text-slate-500">Commande preparee</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-4 h-4 rounded-full bg-blue-500 mt-1"></div>
                      <div>
                        <p className="font-bold">Assignee</p>
                        <p className="text-sm text-slate-500">Livreur assigne</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-4 h-4 rounded-full bg-yellow-500 mt-1"></div>
                      <div>
                        <p className="font-bold">En livraison</p>
                        <p className="text-sm text-slate-500">Livraison en cours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border-t bg-slate-50 flex flex-wrap gap-4 justify-between">
                <div className="flex gap-4 flex-wrap">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold">
                    Imprimer facture
                  </button>

                  <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold">
                    Voir PDF
                  </button>
                </div>

                <button
                  onClick={() => setShowOrderDetails(false)}
                  className="bg-red-500 text-white px-6 py-3 rounded-2xl font-bold"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}

        {showPaymentModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
            <div className="bg-white text-black w-full max-w-md rounded-[30px] p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Paiement Mobile Money</h2>

                <button
                  onClick={closePaymentSystem}
                  className="text-2xl"
                >
                  ✕
                </button>
              </div>

              {!paymentSuccess ? (
                <div className="space-y-4">
                  <button
                    onClick={() => processPayment('Orange Money')}
                    className="w-full bg-orange-500 hover:scale-[1.02] transition-all text-white py-4 rounded-2xl font-bold"
                  >
                    Orange Money
                  </button>

                  <button
                    onClick={() => processPayment('MTN Money')}
                    className="w-full bg-yellow-500 hover:scale-[1.02] transition-all text-white py-4 rounded-2xl font-bold"
                  >
                    MTN Money
                  </button>

                  <button
                    onClick={() => processPayment('Wave')}
                    className="w-full bg-blue-500 hover:scale-[1.02] transition-all text-white py-4 rounded-2xl font-bold"
                  >
                    Wave
                  </button>

                  <button
                    onClick={() => processPayment('Moov Money')}
                    className="w-full bg-green-600 hover:scale-[1.02] transition-all text-white py-4 rounded-2xl font-bold"
                  >
                    Moov Money
                  </button>
                </div>
              ) : (
                <div className="text-center py-10">
                  <div className="text-7xl mb-5">✅</div>

                  <h3 className="text-3xl font-bold text-green-600 mb-3">
                    Paiement Reussi
                  </h3>

                  <p className="text-lg mb-2">
                    Methode utilisee :
                  </p>

                  <div className="bg-slate-100 rounded-2xl px-5 py-4 inline-block font-bold text-xl">
                    {selectedPayment}
                  </div>

                  <button
                    onClick={closePaymentSystem}
                    className="mt-8 w-full bg-green-500 text-white py-4 rounded-2xl font-bold"
                  >
                    Terminer
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {showAddOrder && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6 overflow-auto">
            <div className="bg-white text-black w-full max-w-2xl rounded-[30px] p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-4xl font-bold">Nouvelle commande</h2>
                  <p className="text-slate-500 mt-2">
                    Creer une commande professionnelle
                  </p>
                </div>

                <button
                  onClick={() => setShowAddOrder(false)}
                  className="text-3xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  value={newOrderClient}
                  onChange={(e) => setNewOrderClient(e.target.value)}
                  placeholder="Nom du client"
                  className="border rounded-2xl px-5 py-4"
                />

                <input
                  value={newOrderPhone}
                  onChange={(e) => setNewOrderPhone(e.target.value)}
                  placeholder="Telephone du client"
                  className="border rounded-2xl px-5 py-4"
                />

                <select
                  value={selectedCommune}
                  onChange={(e) => setSelectedCommune(e.target.value)}
                  className="border rounded-2xl px-5 py-4"
                >
                  {communes.map((commune) => (
                    <option key={commune}>{commune}</option>
                  ))}
                </select>

                <input
                  value={newOrderQuartier}
                  onChange={(e) => setNewOrderQuartier(e.target.value)}
                  placeholder="Quartier"
                  className="border rounded-2xl px-5 py-4"
                />

                <textarea
                  value={newOrderProducts}
                  onChange={(e) => setNewOrderProducts(e.target.value)}
                  placeholder="Produits commandes"
                  className="border rounded-2xl px-5 py-4 md:col-span-2 min-h-[120px]"
                />

                <input
                  value={newOrderAmount}
                  onChange={(e) => setNewOrderAmount(e.target.value)}
                  placeholder="Montant total"
                  className="border rounded-2xl px-5 py-4"
                />

                <select
                  value={newOrderPayment}
                  onChange={(e) => setNewOrderPayment(e.target.value)}
                  className="border rounded-2xl px-5 py-4"
                >
                  <option>Orange Money</option>
                  <option>MTN Money</option>
                  <option>Wave</option>
                  <option>Moov Money</option>
                  <option>Paiement livraison</option>
                </select>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-5">
                <div className="bg-slate-100 rounded-2xl p-5">
                  <h3 className="font-bold text-lg mb-3">
                    Attribution automatique
                  </h3>

                  <p>
                    Zone active :
                    <span className="font-bold text-blue-500 ml-2">
                      {selectedCommune}
                    </span>
                  </p>

                  <p className="mt-2 text-sm opacity-70">
                    Le système assigne automatiquement un livreur disponible.
                  </p>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={addOrder}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl text-xl font-bold"
                  >
                    Enregistrer la commande
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showAddDriver && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
            <div className="bg-white text-black w-full max-w-lg rounded-[30px] p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Ajouter un livreur</h2>

                <button
                  onClick={() => setShowAddDriver(false)}
                  className="text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-5">
                <input
                  value={newDriverFirstName}
                  onChange={(e) => setNewDriverFirstName(e.target.value)}
                  placeholder="Prenom du livreur"
                  className="w-full border rounded-2xl px-4 py-4"
                />

                <input
                  value={newDriverLastName}
                  onChange={(e) => setNewDriverLastName(e.target.value)}
                  placeholder="Nom du livreur"
                  className="w-full border rounded-2xl px-4 py-4"
                />

                <input
                  value={newDriverPhone}
                  onChange={(e) => setNewDriverPhone(e.target.value)}
                  placeholder="Numero de telephone"
                  className="w-full border rounded-2xl px-4 py-4"
                />

                <select
                  value={newDriverZone}
                  onChange={(e) => setNewDriverZone(e.target.value)}
                  className="w-full border rounded-2xl px-4 py-4"
                >
                  {communes.map((commune) => (
                    <option key={commune}>{commune}</option>
                  ))}
                </select>

                <button
                  onClick={addDriver}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold"
                >
                  Enregistrer le livreur
                </button>
              </div>
            </div>
          </div>
        )}

        {showAddProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
            <div className="bg-white text-black w-full max-w-lg rounded-[30px] p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Ajouter un produit</h2>

                <button
                  onClick={() => setShowAddProduct(false)}
                  className="text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-5">
                <input
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  placeholder="Nom du produit"
                  className="w-full border rounded-2xl px-4 py-4"
                />

                <input
                  value={newProductStock}
                  onChange={(e) => setNewProductStock(e.target.value)}
                  placeholder="Stock"
                  className="w-full border rounded-2xl px-4 py-4"
                />

                <input
                  value={newProductPrice}
                  onChange={(e) => setNewProductPrice(e.target.value)}
                  placeholder="Prix"
                  className="w-full border rounded-2xl px-4 py-4"
                />

                <button
                  onClick={addProduct}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold"
                >
                  Enregistrer le produit
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
