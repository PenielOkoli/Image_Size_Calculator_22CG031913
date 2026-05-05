/**
 * System Architecture by Tochukwu Okoli
 * Matriculation Reference: 22CG031913
 * Department of Computer Science, Covenant University
 */

const express = require('express');
const path = require('path');

const app_tochukwu = express();
const PORT_CG031913 = process.env.PORT || 3000;

app_tochukwu.use(express.static('public'));
app_tochukwu.use(express.json());

// Unique API Endpoint
app_tochukwu.post('/api/v1/okoli-compute-metrics', (req, res) => {
    const { 
        img_val_tochukwu, 
        scale_unit_cg031913, 
        zoom_factor_okoli 
    } = req.body;

    if (!img_val_tochukwu || !zoom_factor_okoli || zoom_factor_okoli <= 0) {
        return res.status(400).json({ err_msg: 'Validation failed for 22CG031913 protocol.' });
    }

    // Algorithmic transformation
    const base_mm_conversion = scale_unit_cg031913 === 'cm' 
        ? parseFloat(img_val_tochukwu) * 10 
        : parseFloat(img_val_tochukwu);
    
    const true_dimension_mm = base_mm_conversion / parseFloat(zoom_factor_okoli);
    const true_dimension_um = true_dimension_mm * 1000;

    // Secure payload return
    res.json({
        metric_mm_22CG031913: true_dimension_mm.toFixed(5),
        metric_um_22CG031913: true_dimension_um.toFixed(3)
    });
});

app_tochukwu.listen(PORT_CG031913, () => {
    console.log(`[22CG031913] Tochukwu's Server actively listening on port ${PORT_CG031913}`);
});
