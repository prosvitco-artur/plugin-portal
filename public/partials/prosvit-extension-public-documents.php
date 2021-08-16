<?php
$document_posts = get_posts([
  'numberposts' => -1,
  'category'    => 0,
  'orderby'     => 'date',
  'order'       => 'DESC',
  'post_type'   => 'document',
  'suppress_filters' => true,
]);

?>
<?php if (!empty($document_posts)) : ?>
  <div class="portal__table">
    <table class="portal__documents">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($document_posts as $document) : ?>
          <?php
            $files = get_post_meta($document->ID, '_files', true);
            $public = get_post_meta($document->ID, '_public', true);
            $client = get_post_meta($document->ID, '_client', true);
          ?>
          <?php if (!empty($files) && ($public == 'yes' || $client == get_current_user_id())) : ?>
            <?php foreach ($files as $file) : ?>
              <tr>
                <td>#<?php echo $document->ID; ?></td>
                <td><?php echo $file['last_modified']; ?></td>
                <td><?php echo $file['name']; ?></td>
                <td><a href="<?php echo home_url(); ?>?download=egnyte&file=<?php echo base64_encode($file['path']); ?>">Download</a></td>
              </tr>
            <?php endforeach; ?>
          <?php endif; ?>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
<?php endif; ?>
