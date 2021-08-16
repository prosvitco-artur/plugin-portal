<div class="container">
    <h3>Portal</h3>
    <div>
        <form class="archive-users__search">
            <div class="col mb-3">
                <input type="text" class="form-control" name="user_search" value="<?php echo $_GET['user_search']; ?>" placeholder="Search by name or email"> 
            </div>
            <div class="col mb-3">
                <input type="text" class="form-control" name="user_job_title" value="<?php echo $_GET['user_job_title']; ?>" placeholder="Search by job title">    
            </div>
            <div class="col text-end">
                <button class="btn btn-primary">Search</button>
            </div>
        </form>   
    </div>
    <?php
        $args = [
            'role' => 'employee',
            'orderby' => 'login',
            'order' => 'ASC',
            'fields' => 'all',
        ];

        if(isset($_GET['user_search']) && !empty($_GET['user_search'])){
            $args['search'] = "*$_GET[user_search]*";
            $args['search_columns'] = ['ID', 'user_login', 'user_nicename', 'user_email', 'display_name'];
        }

        if(isset($_GET['user_job_title']) && !empty($_GET['user_job_title'])){
            $args['meta_key'] = 'job_title';
            $args['meta_value'] = $_GET['user_job_title'];
            $args['meta_compare'] = 'LIKE';
        }

        $users = get_users($args);
    ?>

    <div class="portal__archive-users">
        <?php foreach($users as $user): ?>
            <div class="row archive-users__item">
                <div class="col-2">
                    <img src="<?php echo profile_picture_url($user->ID); ?>" alt="<?php echo $user->data->user_nicename; ?>">
                </div>
                <div class="col-5">
                    <h5><a href="<?php echo home_url('/profile/'.$user->ID) ?>"><?php echo get_user_meta($user->ID, 'first_name', true); ?> <?php echo get_user_meta($user->ID, 'last_name', true); ?></a></h5>
                    <small><?php echo $user->data->user_nicename; ?></small>
                </div>
                <div class="col-5">
                    <p><?php echo get_user_meta($user->ID, 'job_title', true); ?></p>
                    <p><?php echo $user->data->user_email; ?></p>   
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>