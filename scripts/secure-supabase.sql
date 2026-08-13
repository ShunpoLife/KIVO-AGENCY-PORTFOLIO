ALTER TABLE public."Project" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."Project" FORCE ROW LEVEL SECURITY;
ALTER TABLE public."Admin" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."Admin" FORCE ROW LEVEL SECURITY;

SELECT relname, relrowsecurity, relforcerowsecurity
FROM pg_class
WHERE relname IN ('Project', 'Admin')
ORDER BY relname;
