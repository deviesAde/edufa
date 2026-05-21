<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class PasswordResetTest extends TestCase
{
    use RefreshDatabase;

    public function test_forgot_password_routes_are_disabled(): void
    {
        $response1 = $this->get('/forgot-password');
        $response1->assertStatus(404);

        $response2 = $this->post('/forgot-password', ['email' => 'test@example.com']);
        $response2->assertStatus(404);

        $response3 = $this->get('/reset-password/fake-token');
        $response3->assertStatus(404);

        $response4 = $this->post('/reset-password', [
            'token' => 'fake-token',
            'email' => 'test@example.com',
            'password' => 'newpassword',
            'password_confirmation' => 'newpassword',
        ]);
        $response4->assertStatus(404);
    }
}
