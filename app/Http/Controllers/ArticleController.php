<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Articles/Index', [
            'articles' => Article::with('user')->latest()->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category' => 'nullable|string|max:100',
            'status' => 'required|in:published,draft',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120',
            'author_name' => 'nullable|string|max:255',
            'author_role' => 'nullable|string|max:255',
            'author_bio' => 'nullable|string',
            'show_expert_voice' => 'nullable',
        ]);

        // Sanitize content to prevent XSS
        $allowedTags = '<h1><h2><h3><h4><h5><h6><p><br><b><strong><i><em><ul><ol><li><a><img><blockquote>';
        $sanitizedContent = strip_tags($validated['content'], $allowedTags);

        $thumbnailPath = null;
        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')->store('articles', 'public');
        }

        Article::create([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']) . '-' . Str::random(5),
            'content' => $sanitizedContent,
            'category' => $validated['category'],
            'status' => $validated['status'],
            'thumbnail_path' => $thumbnailPath,
            'user_id' => auth()->id(),
            'author_name' => $validated['author_name'],
            'author_role' => $validated['author_role'],
            'author_bio' => $validated['author_bio'],
            'show_expert_voice' => $request->boolean('show_expert_voice'),
        ]);

        return redirect()->back()->with('success', 'Artikel berhasil dibuat');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category' => 'nullable|string|max:100',
            'status' => 'required|in:published,draft',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120',
            'author_name' => 'nullable|string|max:255',
            'author_role' => 'nullable|string|max:255',
            'author_bio' => 'nullable|string',
            'show_expert_voice' => 'nullable',
        ]);

        // Sanitize content to prevent XSS
        $allowedTags = '<h1><h2><h3><h4><h5><h6><p><br><b><strong><i><em><ul><ol><li><a><img><blockquote>';
        $sanitizedContent = strip_tags($validated['content'], $allowedTags);

        $thumbnailPath = $article->thumbnail_path;
        if ($request->hasFile('thumbnail')) {
            if ($article->thumbnail_path) {
                Storage::disk('public')->delete($article->thumbnail_path);
            }
            $thumbnailPath = $request->file('thumbnail')->store('articles', 'public');
        }

        $article->update([
            'title' => $validated['title'],
            'content' => $sanitizedContent,
            'category' => $validated['category'],
            'status' => $validated['status'],
            'thumbnail_path' => $thumbnailPath,
            'author_name' => $validated['author_name'],
            'author_role' => $validated['author_role'],
            'author_bio' => $validated['author_bio'],
            'show_expert_voice' => $request->boolean('show_expert_voice'),
        ]);

        return redirect()->back()->with('success', 'Artikel berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        if ($article->thumbnail_path) {
            Storage::disk('public')->delete($article->thumbnail_path);
        }
        $article->delete();
        return redirect()->back()->with('success', 'Artikel berhasil dihapus');
    }
}
