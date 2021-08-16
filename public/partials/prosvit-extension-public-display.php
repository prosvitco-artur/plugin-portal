<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       https://prosvit.design
 * @since      1.0.0
 *
 * @package    Prosvit_Extension
 * @subpackage Prosvit_Extension/public/partials
 */
?>

<div class="inventory-reporting">
    <form id="products-qty" action="<?php echo admin_url('admin-ajax.php'); ?>" method="POST">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($product_ids as $key => $product_id): ?>
                    <?php $product = wc_get_product($product_id); ?>
                    <tr>
                        <td><?php echo $product->get_id(); ?></td>
                        <td><?php echo $product->get_image(); ?></td>
                        <td><?php echo $product->get_name(); ?></td>
                        <td>$<?php echo number_format($product->get_price(), 2); ?></td>
                        <td><input type="number" class="input-text qty text" step="1" min="0" max="" name="product-<?php echo $product->get_id(); ?>" value="<?php echo $this->find_reporting_qty($product->get_id()); ?>" title="Qty" size="4" placeholder="" inputmode="numeric"></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <button>Save</button>
    </form>
</div>