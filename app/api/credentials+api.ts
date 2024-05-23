export async function POST(request: Request) {
  const data = await request.json()
  console.log('Received data:', data)
  // Process the data as needed
  return new Response(JSON.stringify({ data, message: 'Data received' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  })
}
