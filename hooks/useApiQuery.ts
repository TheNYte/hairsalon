import {useMutation} from '@tanstack/react-query';

export function useApiMutation(data) {
  const mutation = useMutation({
    mutationFn: (formData: any) => {
      console.log('formDataObject', formData);
      return fetch('http://localhost:8080/account/create', {
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
    },
  });

  return mutation.mutate(data);
}
