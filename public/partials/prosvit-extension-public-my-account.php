<?php
$user = wp_get_current_user();
if (!$user) wp_die('User not auth');

$fields = get_userportal_fields();
?>

<form class="portal-form" action="<?php echo home_url('/portal/my-account/'); ?>" method="POST" enctype="multipart/form-data">
	<input type="hidden" name="user_id" value="<?php echo $user->ID; ?>">
	<input type="hidden" name="update_my_account" value="<?php echo wp_create_nonce('update_my_account'); ?>">
	<div class="row">
		<div class="portal-form__item col-lg-6 mb-3">
			<label for="first_name">First Name</label>
			<input type="text" name="first_name" id="first_name" class="form-control" value="<?php echo get_user_meta($user->ID, 'first_name', true); ?>">
		</div>
		<div class="portal-form__item col-lg-6 mb-3">
			<label for="last_name">Last Name</label>
			<input type="text" name="last_name" id="last_name" class="form-control" value="<?php echo get_user_meta($user->ID, 'last_name', true); ?>">
		</div>
	</div>
	<div class="portal-form__item mb-3">
		<label for="user_email">Email</label>
		<input type="email" name="user_email" id="user_email" class="form-control" value="<?php echo $user->data->user_email; ?>" required>
	</div>
	<div class="portal-form__item mb-3">
		<?php $profile_picture = get_user_meta($user->ID, 'profile_picture', true); ?>
		<label for="profile_picture">Profile Picture</label>
		<?php if (!empty($profile_picture)) : ?>
			<p><small><?php echo basename($profile_picture); ?></small></p>
		<?php endif; ?>
		<input type="file" name="profile_picture" class="form-control" id="profile_picture">
	</div>

	<?php $fields = get_userportal_fields(); ?>

	<?php foreach($fields as $field): ?>
		<div class="portal-form__item mb-3">
			<?php $value = get_user_meta($user->ID, $field['name'], true); ?>
			<label for="<?php echo $field['name']; ?>"><?php echo $field['title']; ?></label>
			<input type="text" name="_portal_<?php echo $field['name']; ?>" id="<?php echo $field['name']; ?>" class="form-control" <?php echo $field['required'] ? 'required' : ''; ?> value="<?php echo $value; ?>">
		</div>
	<?php endforeach; ?>
	
	<div class="portal-form__item">
		<fieldset>
			<legend>Password change</legend>
			<div class="portal-form__item mb-3">
				<label for="password_current">Current password</label>
				<input type="password" name="password_current" v id="password_current" class="form-control" autocomplete="off">
			</div>
			<div class="portal-form__item mb-3">
				<label for="password_1">New password</label>
				<input type="password" name="password_1" id="password_1" class="form-control" autocomplete="off">
			</div>
			<div class="portal-form__item mb-3">
				<label for="password_2">Confirm new password</label>
				<input type="password" name="password_2" id="password_2" class="form-control" autocomplete="off">
			</div>
		</fieldset>
	</div>
	<button type="submit" class="btn btn-primary">Save changes</button>
</form>
