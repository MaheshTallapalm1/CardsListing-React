import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faCreditCard, faBan } from '@fortawesome/free-solid-svg-icons';

const CardListing = () => {
  const [cards, setCards] = useState([]);
  const [activeTab, setActiveTab] = useState('your');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    // Simulate API call to fetch card data
    fetchCardData();
  }, []);

  const fetchCardData = () => {
    // Simulated API response
    const mockApiResponse = {
      data: [
        {
          name: 'Mixmax',
          budget_name: 'Software subscription',
          owner_id: 1,
          spent: {
            value: 100,
            currency: 'SGD'
          },
          available_to_spend: {
            value: 1000,
            currency: 'SGD'
          },
          card_type: 'burner',
          expiry: '9 Feb',
          limit: 100,
          status: 'active'
        },
        {
          name: 'Quickbooks',
          budget_name: 'Software subscription',
          owner_id: 2,
          spent: {
            value: 50,
            currency: 'SGD'
          },
          available_to_spend: {
            value: 250,
            currency: 'SGD'
          },
          card_type: 'subscription',
          limit: 10,
          status: 'active'
        },
        {
          name: 'Linkedin',
          budget_name: 'Memberfive Budget',
          owner_id: 1,
          spent: {
            value: 3005,
            currency: 'SGD'
          },
          available_to_spend: {
            value: 3005,
            currency: 'SGD'
          },
          card_type: 'blocked',
          expiry: '21 July 2021',
          limit: 7890,
          status: 'active'
        },
        {
          name: 'Marketing ads',
          budget_name: 'Memberfive Budget',
          owner_id: 1,
          spent: {
            value: 300,
            currency: 'SGD'
          },
          available_to_spend: {
            value: 7890,
            currency: 'SGD'
          },
          card_type: 'blocked',
          expiry: '21 July 2021',
          limit: 7890,
          status: 'active'
        },
        {
          name: 'AWS bard',
          budget_name: 'Mernbertive Budget',
          owner_id: 2,
          spent: {
            value: 890,
            currency: 'SGD'
          },
          available_to_spend: {
            value: 7890,
            currency: 'SGD'
          },
          card_type: 'blocked',
          expiry: 'July 2021',
          limit: 7890,
          status: 'active'
        },
        {
          name: 'Netflix',
          budget_name: 'Membertive Bdee',
          owner_id: 1,
          spent: {
            value: 7890,
            currency: 'SGD'
          },
          available_to_spend: {
            value: 7890,
            currency: 'SGD'
          },
          card_type: 'blocked',
          expiry: '2 July 2021',
          limit: 7890,
          status: 'active'
        },
        // Add more card objects as needed
      ],
      page: 1,
      per_page: 10,
      total: 100
    };

    // Update state with fetched data
    setCards(mockApiResponse.data);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filteredCards = cards.filter((card) => {
    return (
      (activeTab === 'your' && card.owner_id === 1) || // Replace with your user ID
      activeTab === 'all' ||
      (activeTab === 'blocked' && card.card_type === 'blocked')
    );
  });

  const filteredAndSearchedCards = filteredCards.filter((card) => {
    return (
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === '' || card.card_type === filterType)
    );
  });

  const getCardIcon = (cardType) => {
    switch (cardType) {
      case 'burner':
        return <FontAwesomeIcon icon={faFire} />;
      case 'subscription':
        return <FontAwesomeIcon icon={faCreditCard} />;
      case 'blocked':
        return <FontAwesomeIcon icon={faBan} />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'your' ? 'active' : ''}`}
                onClick={() => handleTabClick('your')}
              >
                Your Cards
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => handleTabClick('all')}
              >
                All Cards
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === 'blocked' ? 'active' : ''
                }`}
                onClick={() => handleTabClick('blocked')}
              >
                Blocked
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search by card name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="col">
          <label className="mr-2">Filter by card type:</label>
          <select
            className="form-control"
            value={filterType}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="burner">Burner</option>
            <option value="subscription">Subscription</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>
      </div>
      <div className="row mt-3">
        {filteredAndSearchedCards.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-3">
              <div className="card-header">
                {getCardIcon(card.card_type)}
              </div>
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <p className="card-text">Budget: {card.budget_name}</p>
                <p className="card-text">
                  Spent: {card.spent.value} {card.spent.currency}
                </p>
                <p className="card-text">
                  Available to spend: {card.available_to_spend.value}{' '}
                  {card.available_to_spend.currency}
                </p>
                {card.card_type === 'subscription' && (
                  <p className="card-text">Limit: {card.limit}</p>
                )}
                {card.card_type === 'blocked' && (
                  <>
                    <p className="card-text">Expiry: {card.expiry}</p>
                    <p className="card-text">Limit: {card.limit} SGD</p>
                  </>
                )}
                <p className="card-text">Status: {card.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardListing;