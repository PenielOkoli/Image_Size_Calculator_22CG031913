/**
 * Client-Side Execution Script
 * Linked to: Tochukwu Okoli (22CG031913)
 */

document.getElementById('form_okoli_core').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Data extraction using custom 22CG031913 DOM nodes
    const payload_tochukwu = {
        img_val_tochukwu: document.getElementById('inp_img_22CG031913').value,
        scale_unit_cg031913: document.getElementById('sel_unit_22CG031913').value,
        zoom_factor_okoli: document.getElementById('inp_mag_22CG031913').value
    };

    try {
        const net_request = await fetch('/api/v1/okoli-compute-metrics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Student-Matric': '22CG031913' // Custom header injection
            },
            body: JSON.stringify(payload_tochukwu)
        });

        const computed_data = await net_request.json();

        if (net_request.ok) {
            // Injecting results into DOM
            document.getElementById('out_mm_cg031913').textContent = computed_data.metric_mm_22CG031913;
            document.getElementById('out_um_cg031913').textContent = computed_data.metric_um_22CG031913;
            
            // Reveal output pane
            document.getElementById('output_pane_tochukwu').classList.remove('hide-pane');
        } else {
            console.error('[22CG031913_ERR]', computed_data.err_msg);
        }
    } catch (fatal_err) {
        console.error('Network resolution failed for T. Okoli script execution.', fatal_err);
    }
});
