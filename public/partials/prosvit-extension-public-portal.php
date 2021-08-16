<?php get_header(); ?>

<?php
$user = wp_get_current_user();
?>
<div class="container portal">
  <div class="row">
    <div class="col-3">
      <nav class="nav flex-column nav-pills">
        <li class="nav-item"><a class="nav-link" href="<?php echo home_url("/portal"); ?>">Portal</a></li>
        <li class="nav-item"><a class="nav-link" href="<?php echo home_url("/portal/my-account"); ?>">My Account</a></li>
        <li class="nav-item"><a class="nav-link" href="<?php echo home_url("/portal/calendar"); ?>">Calendar</a></li>
        <li class="nav-item"><a class="nav-link" href="<?php echo home_url("/portal/documents"); ?>">Documents</a></li>
      </nav>
      <div class="card portal-usercart">
        <img src="<?php echo profile_picture_url($user->ID); ?>" class="card-img-top" alt="<?php echo $user->data->user_nicename; ?>">
        <div class="card-body">
          <h5 class="card-title"><?php echo get_user_meta($user->ID, 'first_name', true); ?> <?php echo get_user_meta($user->ID, 'last_name', true); ?></h5>
        </div>
      </div>
    </div>
    <div class="col-9">
      <div class="portal-content">
        <?php the_content(); ?>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>