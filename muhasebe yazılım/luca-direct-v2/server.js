const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 8790;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Entegratör Mock Data Servisi
app.get('/api/integrator/fetch', (req, res) => {
    res.json({
        success: true,
        summary: {
            incomingCount: 14,
            incomingTotal: '₺184.250,50',
            outgoingCount: 22,
            outgoingTotal: '₺310.800,00',
            matchedCaris: '%100'
        },
        message: 'Entegratörden faturalar başarıyla çekildi.'
    });
});

// Direct LUCA Enjeksiyon Servisi
app.post('/api/luca/inject', (req, res) => {
    const type = req.body.type;
    const label = (type === 'in') ? 'Alış' : 'Satış';
    res.json({
        success: true,
        message: label + ' faturaları sıfır dosya ile doğrudan LUCA ya aktarıldı! Yevmiye Fiş No: 2026/1042'
    });
});

app.listen(PORT, () => {
    console.log('\n🚀 LUCA Direct v2 Engine Aktif!');
    console.log('🌐 Panel: http://localhost:' + PORT);
});
