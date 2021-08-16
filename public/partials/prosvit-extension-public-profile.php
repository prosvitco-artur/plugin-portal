<?php get_header(); ?>

<?php
$profile = get_query_var('profile');
$user = get_user_by('ID', $profile);
?>
<div class="container portal">
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="<?php echo home_url(); ?>">Home</a></li>
      <li class="breadcrumb-item"><a href="<?php echo home_url('/portal'); ?>">Portal</a></li>
      <li class="breadcrumb-item active" aria-current="page">User Profile</li>
    </ol>
  </nav>
  <div class="row gutters-sm">
    <div class="col-md-4 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-column align-items-center text-center">
            <img src="<?php echo profile_picture_url($user->ID); ?>" alt="<?php echo $user->data->user_nicename; ?>" class="rounded-circle" width="150">
            <div class="mt-3">
              <h4><?php echo get_user_meta($user->ID, 'first_name', true); ?> <?php echo get_user_meta($user->ID, 'last_name', true); ?></h4>
              <p class="text-secondary mb-1"><?php echo get_user_meta($user->ID, 'job_title', true); ?></p>
              <p class="text-muted font-size-sm"><?php echo get_user_meta($user->ID, 'departament', true); ?></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Full Name</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              <?php echo get_user_meta($user->ID, 'first_name', true); ?> <?php echo get_user_meta($user->ID, 'last_name', true); ?>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Nicename</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              <?php echo $user->data->user_nicename; ?>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Email</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              <?php echo $user->data->user_email; ?>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Website</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              <?php echo $user->data->user_url; ?>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Registered</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              <?php echo $user->data->user_registered; ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>
