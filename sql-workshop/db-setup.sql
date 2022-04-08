CREATE EXTENSION pgcrypto;

CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR,
    "mobile_number" VARCHAR(10),
    "active" BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS "blogs" (
    "id" SERIAL PRIMARY KEY,
    "text" TEXT,
    "title" VARCHAR,
    "created_by" INT NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT NOW()
);

ALTER TABLE "blogs" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

CREATE TABLE IF NOT EXISTS "tags" (
    "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    "title" VARCHAR
);

CREATE TABLE IF NOT EXISTS "blogs_tags_id" (
    "id" SERIAL PRIMARY KEY,
    "blog_id" INT NOT NULL,
    "tag_id" UUID NOT NULL
);

ALTER TABLE "blogs_tags_id" ADD FOREIGN KEY ("blog_id") REFERENCES "blogs" ("id");
ALTER TABLE "blogs_tags_id" ADD FOREIGN KEY ("tag_id") REFERENCES "tags" ("id");

CREATE UNIQUE INDEX ON "blogs_tags_id" ("blog_id", "tag_id");

INSERT INTO "users" ("name", "mobile_number") VALUES 
    ('John Doe', '1234567890'),
    ('Jane Doe', '0987654321'),
    ('Jon Snow', '1122334455');
    
INSERT INTO "blogs" ("text", "title", "created_by") VALUES 
    ('This is some long text of a blog', 'first blog', 1),
    ('This is another long blog', 'blog by Martin', 3),
    ('The greatest blog ever created!', 'great blogs', 1);

INSERT INTO "tags" ("title") VALUES
    ('first blog'),
    ('movie'),
    ('historic'),
    ('life'),
    ('food'),
    ('books'),
    ('tv shows');
    
INSERT INTO "blogs_tags_id" (blog_id, tag_id) VALUES 
    (1, (SELECT id FROM tags WHERE title = 'first blog')),
    (2, (SELECT id FROM tags WHERE title = 'first blog')),
    (2, (SELECT id FROM tags WHERE title = 'tv shows')),
    (2, (SELECT id FROM tags WHERE title = 'books')),
    (3, (SELECT id FROM tags WHERE title = 'life')),
    (3, (SELECT id FROM tags WHERE title = 'historic')),
    (3, (SELECT id FROM tags WHERE title = 'food'));

SELECT blogs.title, users.name, tags.title 
	FROM blogs 
	INNER JOIN users ON users.id = blogs.created_by
	LEFT JOIN blogs_tags_id ON blogs_tags_id.blog_id = blogs.id
	INNER JOIN tags ON blogs_tags_id.tag_id = tags.id
	WHERE blogs.id = 2;
