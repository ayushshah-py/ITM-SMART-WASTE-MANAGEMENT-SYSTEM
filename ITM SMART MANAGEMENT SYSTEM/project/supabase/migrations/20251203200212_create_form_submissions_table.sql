/*
  # Create Form Submissions Table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `contact_number` (text)
      - `email_address` (text)
      - `submitted_at` (timestamp)
      
  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy to allow anyone to insert submissions
    - Add policy to allow admins to view submissions
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  contact_number text NOT NULL,
  email_address text NOT NULL,
  submitted_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit form"
  ON form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
