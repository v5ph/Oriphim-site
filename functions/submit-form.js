export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    
    // Extract form fields
    const institution = formData.get('institution');
    const email = formData.get('email');
    const capital_base = formData.get('capital_base');
    const integration = formData.get('integration');
    const message = formData.get('message');

    // Forward to Web3Forms
    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '2e6f8de3-108b-4343-8b29-5add3e4abc6f',
        subject: 'New ORIPHIM Inquiry',
        from_name: 'ORIPHIM Website',
        institution,
        email,
        capital_base,
        integration,
        message
      })
    });

    const result = await web3formsResponse.json();

    return new Response(JSON.stringify(result), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      message: error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
