<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title', 
        'slug', 
        'content', 
        'thumbnail_path', 
        'category', 
        'user_id', 
        'status',
        'author_name',
        'author_role',
        'author_bio',
        'show_expert_voice',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
