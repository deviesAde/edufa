<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = ['title', 'description', 'type', 'media_type', 'media_path'];
}
