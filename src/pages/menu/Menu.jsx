import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SearchBar from '../../components/SearchBar/SearchBar'
import '../home/home.css'
import './menu.css'

const menuData = [
    {
        category: 'Indian Classics',
        sub: 'Flavours rooted in memory and celebration.',
        items: [
            { name: 'Kesar Rasmalai', desc: 'Soft cottage cheese discs soaked in saffron milk.', price: '₹280', image: 'images/items/rasmalai.png', tags: ['V', 'GF'] },

            { name: 'Pista Katli', desc: 'Smooth pistachio fudge with a subtle crunch.', price: '₹320', image: 'images/items/pistaBarfi.png', tags: ['V', 'GF'] },
            { name: 'Rose Phirni', desc: 'Slow-cooked rice pudding infused with rose.', price: '₹240', image: 'images/items/rosePhirni.png', tags: ['V', 'GF'] },
        ]
    },
    {
        category: 'From the Oven',
        sub: 'Freshly baked, finished with care.',
        items: [
            { name: 'Classic Vanilla Bean Cheesecake', desc: 'Creamy, rich, and perfectly balanced.', price: '₹380', image: 'images/items/vanillaCheesecake.png', tags: ['V'] },
            { name: 'Dark Chocolate Truffle Cake', desc: 'Deep cocoa layers with silky ganache.', price: '₹420', image: 'images/items/truffleCake.png', tags: ['V'] },
            { name: 'Strawberry Shortcake', desc: 'Light sponge with fresh cream and berries.', price: '₹350', image: 'images/items/strawberryShortcake.png', tags: ['V'] },

        ]
    },
    {
        category: 'Tradition Reimagined',
        sub: 'Classic sweets with a modern twist.',
        items: [
            { name: 'Gulab Jamun Cheesecake', desc: 'Creamy cheesecake layered with warm gulab jamun.', price: '₹450', image: 'images/items/gulabJamunCheesecake.png', tags: ['V'], featured: true, signature: true },
            { name: 'Rose Strawberry Cupcake', desc: 'Fluffy vanilla cupcake with rose essence, strawberry cream & dried petals.', price: '₹300', image: 'images/items/roseStrawberryCupcake.png', tags: ['V'], featured: true, signature: true },
            { name: 'Cardamom Crème Brûlée', desc: 'Classic custard with subtle elaichi warmth and caramelized sugar top.', price: '₹320', image: 'images/items/cremeBrulee.png', tags: ['V', 'GF'] },
        ]
    }
]

function Menu() {
    const [searchQuery, setSearchQuery] = useState('')

    const filteredData = menuData.map(category => {
        const q = searchQuery.toLowerCase()
        if (!q) return category

        const categoryMatch = category.category.toLowerCase().includes(q)
        const filteredItems = category.items.filter(item =>
            categoryMatch ||
            item.name.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q)
        )

        return { ...category, items: filteredItems }
    }).filter(category => category.items.length > 0)

    return (
        <div className="menu-page">

            <Navbar />

            <div className="menu-header">
                <h1>Our Menu</h1>
                <p>A curated selection of handcrafted sweets — where tradition meets tenderness.</p>
            </div>

            <SearchBar onSearch={setSearchQuery} />

            {filteredData.map((category, catIdx) => (
                <section className="menu-category" key={catIdx}>
                    <h2 className="category-title">{category.category}</h2>
                    <p className="category-sub">{category.sub}</p>
                    <div className="menu-grid">

                        {category.items.map((item, itemIdx) => (
                            <div className={`menu-item${item.featured ? ' featured' : ''}`} key={itemIdx}>
                                <div className="item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <div className="item-header">
                                        <h3 className="item-name">
                                            {item.name}
                                            {item.sub && <span className="item-sub"> {item.sub}</span>}
                                        </h3>
                                        <span className="item-price">{item.price}</span>
                                    </div>
                                    <p className="item-desc">{item.desc}</p>
                                    <div className="item-tags">
                                        {item.tags.map(tag => (
                                            <span className={`tag tag-${tag.toLowerCase()}`} key={tag}>{tag}</span>
                                        ))}
                                        {item.signature && (
                                            <span className="tag tag-signature">★ Signature</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>
            ))}

            {filteredData.length === 0 && (
                <div className="menu-empty">
                    <p>No items found. Try a different search.</p>
                </div>
            )}


            <div className="menu-legend">
                <span><span className="tag tag-v">V</span> Vegetarian</span>
                <span><span className="tag tag-ve">VE</span> Vegan</span>
                <span><span className="tag tag-gf">GF</span> Gluten Free</span>
            </div>

            <Footer />
        </div>
    )
}

export default Menu
