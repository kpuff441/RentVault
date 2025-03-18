/*
  # Initial Schema for Property Management System

  1. New Tables
    - properties
      - Basic property information
      - Location and details
    - units
      - Individual rental units within properties
    - tenants
      - Tenant information and contact details
    - leases
      - Lease agreements linking tenants to units
    - maintenance_requests
      - Maintenance and repair tracking
    - disputes
      - Dispute and complaint logging
    - transactions
      - Financial transactions (income/expenses)
    - reminders
      - System alerts and notifications

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Properties table
CREATE TABLE properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES auth.users(id),
  name text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  zip_code text NOT NULL,
  property_type text NOT NULL,
  total_units integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Units table
CREATE TABLE units (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid REFERENCES properties(id),
  unit_number text NOT NULL,
  bedrooms integer NOT NULL,
  bathrooms numeric(3,1) NOT NULL,
  square_feet integer NOT NULL,
  rent_amount decimal(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'vacant',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tenants table
CREATE TABLE tenants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES auth.users(id),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  emergency_contact text,
  emergency_phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Leases table
CREATE TABLE leases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_id uuid REFERENCES units(id),
  tenant_id uuid REFERENCES tenants(id),
  start_date date NOT NULL,
  end_date date NOT NULL,
  rent_amount decimal(10,2) NOT NULL,
  security_deposit decimal(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Maintenance requests table
CREATE TABLE maintenance_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_id uuid REFERENCES units(id),
  tenant_id uuid REFERENCES tenants(id),
  issue_type text NOT NULL,
  description text NOT NULL,
  priority text NOT NULL DEFAULT 'normal',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Disputes table
CREATE TABLE disputes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id uuid REFERENCES tenants(id),
  unit_id uuid REFERENCES units(id),
  type text NOT NULL,
  description text NOT NULL,
  status text NOT NULL DEFAULT 'open',
  resolution text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Transactions table
CREATE TABLE transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid REFERENCES properties(id),
  unit_id uuid REFERENCES units(id),
  type text NOT NULL,
  category text NOT NULL,
  amount decimal(10,2) NOT NULL,
  description text NOT NULL,
  date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Reminders table
CREATE TABLE reminders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES auth.users(id),
  type text NOT NULL,
  title text NOT NULL,
  description text,
  due_date timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE units ENABLE ROW LEVEL SECURITY;
ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE leases ENABLE ROW LEVEL SECURITY;
ALTER TABLE maintenance_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE disputes ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE reminders ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can manage their own properties"
ON properties FOR ALL
TO authenticated
USING (auth.uid() = owner_id);

CREATE POLICY "Users can manage units in their properties"
ON units FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM properties
    WHERE properties.id = property_id
    AND properties.owner_id = auth.uid()
  )
);

CREATE POLICY "Users can manage their tenants"
ON tenants FOR ALL
TO authenticated
USING (auth.uid() = owner_id);

CREATE POLICY "Users can manage leases for their properties"
ON leases FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM units
    JOIN properties ON units.property_id = properties.id
    WHERE units.id = unit_id
    AND properties.owner_id = auth.uid()
  )
);

CREATE POLICY "Users can manage maintenance requests for their properties"
ON maintenance_requests FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM units
    JOIN properties ON units.property_id = properties.id
    WHERE units.id = unit_id
    AND properties.owner_id = auth.uid()
  )
);

CREATE POLICY "Users can manage disputes for their properties"
ON disputes FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM units
    JOIN properties ON units.property_id = properties.id
    WHERE units.id = unit_id
    AND properties.owner_id = auth.uid()
  )
);

CREATE POLICY "Users can manage transactions for their properties"
ON transactions FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM properties
    WHERE properties.id = property_id
    AND properties.owner_id = auth.uid()
  )
);

CREATE POLICY "Users can manage their reminders"
ON reminders FOR ALL
TO authenticated
USING (auth.uid() = owner_id);