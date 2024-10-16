{
    'name': 'POS Salesperson',
    'version': '17.0.1.0.0',
    'author': 'Preway IT Solutions',
    'category': 'Point of Sale',
    'depends': ['point_of_sale'],
    'summary': 'This app helps you set salesperson on POS orderlines from POS interface',
    'description': '''
- Odoo POS Orderline user
- Odoo POS Orderline salesperson
- Odoo POS Salesperson
- Odoo POS Item Salesperson
- Odoo POS Item User
- Odoo POS product salesperson
    ''',
    'data': [
        'views/pos_config_view.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            'pw_pos_salesperson/static/src/js/models.js',
            'pw_pos_salesperson/static/src/js/SalespersonButton.js',
            'pw_pos_salesperson/static/src/js/Orderline.js',
        ],
        'web.assets_qweb': [
            'pw_pos_salesperson/static/src/xml/**/*',
        ],
    },
    'qweb': ['static/src/xml/pos.xml'],
    'price': 20.0,
    'currency': "EUR",
    'application': True,
    'installable': True,
    'license': "LGPL-3",
    'live_test_url': 'https://youtu.be/xnM8rchcD2o',
    'images': ["static/description/Banner.png"],
}
