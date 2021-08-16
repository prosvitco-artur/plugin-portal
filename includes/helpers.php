<?php

function get_userportal_fields()
{
  $fields = [
    [
      'name' => 'job_title',
      'title' => 'Job title',
      'type' => 'text',
      'required' => false
    ],
    [
      'name' => 'departament',
      'title' => 'Departament',
      'type' => 'text',
      'required' => false
    ],
  ];

  return $fields;
}

function profile_picture_url($user_id){
  $profile_picture = get_user_meta($user_id, 'profile_picture', true);
  if(empty($profile_picture)){
    return get_avatar_url($user_id, ['default' => 'gravatar_default']);
  }

  return $profile_picture;
}

function userData($cur_user_id = 0)
{
  if($cur_user_id == 0){
    $cur_user_id = get_current_user_id();
  }

  if ($cur_user_id) {
    $user_data = get_userdata($cur_user_id);
    return $user_data;
  }
}



function eventsCalendarJson($cur_user_id = 0)
{
  if($cur_user_id == 0){
    $cur_user_id = get_current_user_id();
  }
  

  if ($cur_user_id) {
    $posts = get_posts(array(
      'post_type'   => 'calendar',
    ));

    $calendar_posts = [];
    foreach ($posts as $post) {
      $post_title = $post->post_title;
      $post_id = $post->ID;
      $foo = wp_get_post_terms($post_id, 'types', array('fields' => 'ids'));
      if ($foo) {
        $color_tag = get_term_meta($foo[0], 'color', true);
        if ($color_tag) {
          $color = $color_tag;
        }
      } else {
        $color = "#a8aefe";
      }
      $text_event = get_post_meta($post_id, 'text_event', true);
      $value_month = get_post_meta($post_id, 'month_events', true);
      $value_day = get_post_meta($post_id, 'day_event', true);
      $value_year = get_post_meta($post_id, 'year_event', true);
      $post_customer = get_post_meta($post_id, 'event_for_customer', true);

      if ($cur_user_id == $post_customer || $post_customer == 'all') {

        $post_date = "" . $value_year . "-" . $value_month . "-" . $value_day . "";
        $repeat_event = get_post_meta($post_id, 'repet_events', true);
        $period_interval = get_post_meta($post_id, 'period_interval', true);
        if ($post_date) {
          if ($repeat_event == 'day'){
            for ($i = 0; $i < 120; $i++){
              if ($i == 0) {
                $oldDate = $post_date;
                $calendar_post['date'] = $oldDate;
                $calendar_post['title'] = $post_title;
                $calendar_post['color'] = $color;
                $calendar_post['description'] = $text_event;
                $calendar_posts[] = $calendar_post;
              } else {
                $oldDate = end($calendar_posts)['date'];
                $newDate = new DateTime($oldDate);
                if(isset($period_interval) && $period_interval !=''){
                  $newDate->add(new DateInterval('P'. $period_interval . 'D'));
                }
                $fomattedDate = $newDate->format('Y-m-d');
                $calendar_post['date'] = $fomattedDate;
                $calendar_post['title'] = $post_title;
                $calendar_post['color'] = $color;
                $calendar_post['description'] = $text_event;
                $calendar_posts[] = $calendar_post;
              }
            }
          } else  if ($repeat_event == 'week') {
            for ($i = 0; $i < 52; $i++) {
              if ($i == 0) {
                $oldDate = $post_date;
                $calendar_post['date'] = $oldDate;
                $calendar_post['title'] = $post_title;
                $calendar_post['color'] = $color;
                $calendar_post['description'] = $text_event;
                $calendar_posts[] = $calendar_post;
              } else {
                $oldDate = end($calendar_posts)['date'];
                $newDate = new DateTime($oldDate);
                if(isset($period_interval) && $period_interval !=''){
                  $newDate->add(new DateInterval('P'. $period_interval . 'W'));
                }
                $fomattedDate = $newDate->format('Y-m-d');
                $calendar_post['date'] = $fomattedDate;
                $calendar_post['title'] = $post_title;
                $calendar_post['color'] = $color;
                $calendar_post['description'] = $text_event;
                $calendar_posts[] = $calendar_post;
              }
            }
          } else if ($repeat_event == 'month') {
            for ($i = 0; $i < 24; $i++) {
              if ($i == 0) {
                $oldDate = $post_date;
                $calendar_post['date'] = $oldDate;
                $calendar_post['title'] = $post_title;
                $calendar_post['color'] = $color;
                $calendar_post['description'] = $text_event;
                $calendar_posts[] = $calendar_post;
              } else {
                $oldDate = end($calendar_posts)['date'];
                $newDate = new DateTime($oldDate);
                if(isset($period_interval) && $period_interval !=''){
                  $newDate->add(new DateInterval('P'. $period_interval . 'M'));
                }
                $fomattedDate = $newDate->format('Y-m-d');
                $calendar_post['date'] = $fomattedDate;
                $calendar_post['title'] = $post_title;
                $calendar_post['color'] = $color;
                $calendar_post['description'] = $text_event;
                $calendar_posts[] = $calendar_post;
              }
            }
          } else if ($repeat_event == 'yearly') {
            for ($i = 0; $i < 5; $i++) {
              if ($i == 0) {
                $oldDate = $post_date;
                $calendar_post['date'] = $oldDate;
                $calendar_post['title'] = $post_title;
                $calendar_post['color'] = $color;
                $calendar_post['description'] = $text_event;
                $calendar_posts[] = $calendar_post;
              } else {
                $oldDate = end($calendar_posts)['date'];
                $newDate = new DateTime($oldDate);
                if(isset($period_interval) && $period_interval !=''){
                  $newDate->add(new DateInterval('P'. $period_interval . 'Y'));
                }
                $fomattedDate = $newDate->format('Y-m-d');
                $calendar_post['date'] = $fomattedDate;
                $calendar_post['title'] = $post_title;
                $calendar_post['color'] = $color;
                $calendar_post['description'] = $text_event;
                $calendar_posts[] = $calendar_post;
              }
            }
          } else {
            $calendar_post['date'] = $post_date;
            $calendar_post['title'] = $post_title;
            $calendar_post['color'] = $color;
            $calendar_post['description'] = $text_event;
            $calendar_posts[] = $calendar_post;
          }
        }
      }
    }
  }

  return $calendar_posts;
}
